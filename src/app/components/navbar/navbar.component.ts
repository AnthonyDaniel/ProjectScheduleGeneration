import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { ExportService } from 'src/app/service/export-service';
import Swal from 'sweetalert2';
import { FirebaseServiceService } from 'src/app/service/firebase-service.service';
import { SheduleGeneratorComponent } from '../shedule-generator/shedule-generator.component';
import { Data } from '../../modelo/data';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public data = {
    $key: null,
    email: null,
    horario: null,
    hora: null
  }

  private user: SocialUser;
  private loggedIn: boolean;
  horarioGuardar: any = [];
  horariosGuardados: any;
  datos: any = [];

  constructor(private authService: AuthService,
    private exportService: ExportService,
    private firebaseService: FirebaseServiceService,
    private schedule: SheduleGeneratorComponent) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
  informacion() {
    Swal.fire({
      title: 'Acerca de',
      text: "UNA-Horario: El propósito de este proyecto, consiste en que los estudiantes de la Universidad Nacional, puedan generar horarios de estudio, donde puedan organizar correctamente el tiempo, ya que uno de los principales problemas como estudiante, es la mala organización del tiempo.",
      showConfirmButton: true,
    })
  }
  export() {
    var json = localStorage.getItem('Calendario');
    var horario = JSON.parse(json);
    var l = 0;
    for (let i = 6; i <= 23; i++) {
      this.horarioGuardar.push(
        {
          Hora: horario[0].lunes[l].id + ":00-" + horario[0].lunes[l].id + ":50",
          Lunes: horario[0].lunes[l].h,
          Martes: horario[1].martes[l].h,
          Miercoles: horario[2].miercoles[l].h,
          Jueves: horario[3].jueves[l].h,
          Viernes: horario[4].viernes[l].h,
          Sabado: horario[5].sabado[l].h,
          Domingo: horario[6].domingo[l].h
        });
      l++;
    }
    this.exportService.exportExcel(this.horarioGuardar, 'Horario');
  }
  CrearNuevoHorario() {
    Swal.fire({
      title: '¿Estas seguro que deseas generar un nuevo horario?',
      text: "Si creas un nuevo calendario, sin haber guardado el actual, este se borrara permanentemente!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#89CA8E',
      cancelButtonColor: '#EF4023',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Crear ahora!'
    }).then((result) => {
      if (result.value) {
        this.schedule.Remove();
      }
    })
  }
  d: Data = new Data();
  GuardarHorarioGoogle() {
    var fecha = new Date();
    var mes: number = fecha.getMonth() + 1;
    var fechaSimple = fecha.getDate() + "/" + mes + "/" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes();
    this.d.email = this.user.email;
    this.d.horario = localStorage.getItem('Calendario');
    console.log(localStorage.getItem('Calendario'));
    this.d.hora = fechaSimple;
    this.d.$key = null;
    this.firebaseService.insert(this.d);
    Swal.fire({
      type: 'success',
      title: 'Guardar horario',
      showConfirmButton: false,
      timer: 1500
    });
  }

  LlenarTabla(dat) {
    var u = this.user.email;
    var datos: any = [];
    let i = 0;
    dat.forEach(function (element) {
      if (element.email == u) {
        datos[i] = element;
        i++;
      }
    });
    this.datos = datos;
  }

  ObtenerHorarios() {
    var dat: any = [];
    this.firebaseService.get().snapshotChanges().subscribe(item => {
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        dat.push(x as Data)
      });
      this.LlenarTabla(dat);
    });
  }

  Ver(h) {
    Swal.fire({
      title: '¿Estas seguro que deseas ver?',
      text: "Si abres este calendario, sin haber guardado el actual, este se borrara permanentemente!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#89CA8E',
      cancelButtonColor: '#EF4023',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Ver ahora!'
    }).then((result) => {
      if (result.value) {
        console.log(h.horario);
        localStorage.setItem('Calendario', h.horario);
        location.reload();
      }
    })
  }
  Eliminar(h) {
    Swal.fire({
      title: '¿Estas seguro que deseas eliminar?',
      text: "El calendario se borrara permanentemente!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#CC071E',
      cancelButtonColor: '#EF4023',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.firebaseService.delete(h.$key);
        this.ObtenerHorarios()
      }
    })
  };
}
