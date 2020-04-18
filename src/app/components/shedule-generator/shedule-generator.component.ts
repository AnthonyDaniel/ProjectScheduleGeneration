import { Component, OnInit, Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
@Component({
  selector: 'app-shedule-generator',
  templateUrl: './shedule-generator.component.html',
  styleUrls: ['./shedule-generator.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class SheduleGeneratorComponent implements OnInit {

  public horarioAux: any = [
    {
      lunes: [
        { id: 6, h: "", color: "" }, { id: 7, h: "", color: "" }, { id: 8, h: "", color: "" }, { id: 9, h: "", color: "" }, { id: 10, h: "", color: "" }, { id: 11, h: "", color: "" },
        { id: 12, h: "", color: "" }, { id: 13, h: "", color: "" }, { id: 14, h: "", color: "" }, { id: 15, h: "", color: "" }, { id: 16, h: "", color: "" }, { id: 17, h: "", color: "" },
        { id: 18, h: "", color: "" }, { id: 19, h: "", color: "" }, { id: 20, h: "", color: "" }, { id: 21, h: "", color: "" }, { id: 22, h: "", color: "" }, { id: 23, h: "", color: "" },
      ]
    },
    {
      martes: [
        { id: 6, h: "", color: "" }, { id: 7, h: "", color: "" }, { id: 8, h: "", color: "" }, { id: 9, h: "", color: "" }, { id: 10, h: "", color: "" }, { id: 11, h: "", color: "" },
        { id: 12, h: "", color: "" }, { id: 13, h: "", color: "" }, { id: 14, h: "", color: "" }, { id: 15, h: "", color: "" }, { id: 16, h: "", color: "" }, { id: 17, h: "", color: "" },
        { id: 18, h: "", color: "" }, { id: 19, h: "", color: "" }, { id: 20, h: "", color: "" }, { id: 21, h: "", color: "" }, { id: 22, h: "", color: "" }, { id: 23, h: "", color: "" },
      ]
    },
    {
      miercoles: [
        { id: 6, h: "", color: "" }, { id: 7, h: "", color: "" }, { id: 8, h: "", color: "" }, { id: 9, h: "", color: "" }, { id: 10, h: "", color: "" }, { id: 11, h: "", color: "" },
        { id: 12, h: "", color: "" }, { id: 13, h: "", color: "" }, { id: 14, h: "", color: "" }, { id: 15, h: "", color: "" }, { id: 16, h: "", color: "" }, { id: 17, h: "", color: "" },
        { id: 18, h: "", color: "" }, { id: 19, h: "", color: "" }, { id: 20, h: "", color: "" }, { id: 21, h: "", color: "" }, { id: 22, h: "", color: "" }, { id: 23, h: "", color: "" },
      ]
    },
    {
      jueves: [
        { id: 6, h: "", color: "" }, { id: 7, h: "", color: "" }, { id: 8, h: "", color: "" }, { id: 9, h: "", color: "" }, { id: 10, h: "", color: "" }, { id: 11, h: "", color: "" },
        { id: 12, h: "", color: "" }, { id: 13, h: "", color: "" }, { id: 14, h: "", color: "" }, { id: 15, h: "", color: "" }, { id: 16, h: "", color: "" }, { id: 17, h: "", color: "" },
        { id: 18, h: "", color: "" }, { id: 19, h: "", color: "" }, { id: 20, h: "", color: "" }, { id: 21, h: "", color: "" }, { id: 22, h: "", color: "" }, { id: 23, h: "", color: "" },
      ]
    },
    {
      viernes: [
        { id: 6, h: "", color: "" }, { id: 7, h: "", color: "" }, { id: 8, h: "", color: "" }, { id: 9, h: "", color: "" }, { id: 10, h: "", color: "" }, { id: 11, h: "", color: "" },
        { id: 12, h: "", color: "" }, { id: 13, h: "", color: "" }, { id: 14, h: "", color: "" }, { id: 15, h: "", color: "" }, { id: 16, h: "", color: "" }, { id: 17, h: "", color: "" },
        { id: 18, h: "", color: "" }, { id: 19, h: "", color: "" }, { id: 20, h: "", color: "" }, { id: 21, h: "", color: "" }, { id: 22, h: "", color: "" }, { id: 23, h: "", color: "" },
      ]
    },
    {
      sabado: [
        { id: 6, h: "", color: "" }, { id: 7, h: "", color: "" }, { id: 8, h: "", color: "" }, { id: 9, h: "", color: "" }, { id: 10, h: "", color: "" }, { id: 11, h: "", color: "" },
        { id: 12, h: "", color: "" }, { id: 13, h: "", color: "" }, { id: 14, h: "", color: "" }, { id: 15, h: "", color: "" }, { id: 16, h: "", color: "" }, { id: 17, h: "", color: "" },
        { id: 18, h: "", color: "" }, { id: 19, h: "", color: "" }, { id: 20, h: "", color: "" }, { id: 21, h: "", color: "" }, { id: 22, h: "", color: "" }, { id: 23, h: "", color: "" },
      ]
    },
    {
      domingo: [
        { id: 6, h: "", color: "" }, { id: 7, h: "", color: "" }, { id: 8, h: "", color: "" }, { id: 9, h: "", color: "" }, { id: 10, h: "", color: "" }, { id: 11, h: "", color: "" },
        { id: 12, h: "", color: "" }, { id: 13, h: "", color: "" }, { id: 14, h: "", color: "" }, { id: 15, h: "", color: "" }, { id: 16, h: "", color: "" }, { id: 17, h: "", color: "" },
        { id: 18, h: "", color: "" }, { id: 19, h: "", color: "" }, { id: 20, h: "", color: "" }, { id: 21, h: "", color: "" }, { id: 22, h: "", color: "" }, { id: 23, h: "", color: "" },
      ]
    },
  ];

  public horarioTem: any;

  horaInicio: any = [
    { h: 6 }, { h: 7 }, { h: 8 }, { h: 9 }, { h: 10 },
    { h: 11 }, { h: 12 }, { h: 13 }, { h: 14 }, { h: 15 },
    { h: 16 }, { h: 17 }, { h: 18 }, { h: 19 }, { h: 20 },
    { h: 21 }, { h: 22 }, { h: 23 },
  ];
  horaFinal: any = [
    { h: 6 }, { h: 7 }, { h: 8 }, { h: 9 }, { h: 10 },
    { h: 11 }, { h: 12 }, { h: 13 }, { h: 14 }, { h: 15 },
    { h: 16 }, { h: 17 }, { h: 18 }, { h: 19 }, { h: 20 },
    { h: 21 }, { h: 22 }, { h: 23 },
  ];

  public hora_final: number = null;
  public hora_inicio: number = null;
  public color: any = null;
  public asignatura: any = null;

  public constructor() {
    this.horarioTem = this.horarioAux;
  }

  public ngOnInit() {
    var i = this.Get();
    if (i != null) {
      this.horarioAux = i;
      this.ObtenerHorario();
    }
  }

  public ObtenerHorario() {
    this.horarioAux[0].lunes.forEach(function (element) {
      if (element.h != "") {
        $("#0" + element.id).attr("style", "background:" + element.color + "");
      }
    });
    this.horarioAux[1].martes.forEach(function (element) {
      if (element.h != "") {
        $("#1" + element.id).attr("style", "background:" + element.color + "");
      }
    });
    this.horarioAux[2].miercoles.forEach(function (element) {
      if (element.h != "") {
        $("#2" + element.id).attr("style", "background:" + element.color + "");
      }
    });
    this.horarioAux[3].jueves.forEach(function (element) {
      if (element.h != "") {
        $("#3" + element.id).attr("style", "background:" + element.color + "");
      }
    });
    this.horarioAux[4].viernes.forEach(function (element) {
      if (element.h != "") {
        $("#4" + element.id).attr("style", "background:" + element.color + "");
      }
    });
    this.horarioAux[5].sabado.forEach(function (element) {
      if (element.h != "") {
        $("#5" + element.id).attr("style", "background:" + element.color + "");
      }
    });
    this.horarioAux[6].domingo.forEach(function (element) {
      if (element.h != "") {
        $("#6" + element.id).attr("style", "background:" + element.color + "");
      }
    });
  }

  AgregarAsignatura() {
    var l = $('#seleccionarLunes').prop('checked');
    var m = $('#seleccionarMartes').prop('checked');
    var i = $('#seleccionarMiercoles').prop('checked');
    var j = $('#selccionarJueves').prop('checked');
    var v = $('#seleccionaViernes').prop('checked');
    var s = $('#selccionarSabado').prop('checked');
    var d = $('#seleccionarDomingo').prop('checked');
    var agregoL = false, agregoM = false, agregoI = false, agregoJ = false, agregoV = false, agregoS = false, agregoD = false;
    if (l || m || i || j || v || s || d) {
      if (l) {
        agregoL = this.GenerarHorarioPorAsignatura("Lunes");
      }
      if (m) {
        agregoM = this.GenerarHorarioPorAsignatura("Martes");
      }
      if (i) {
        agregoI = this.GenerarHorarioPorAsignatura("Miercoles");
      }
      if (j) {
        agregoJ = this.GenerarHorarioPorAsignatura("Jueves");
      }
      if (v) {
        agregoV = this.GenerarHorarioPorAsignatura("Viernes");
      }
      if (s) {
        agregoS = this.GenerarHorarioPorAsignatura("Sabado");
      }
      if (d) {
        agregoD = this.GenerarHorarioPorAsignatura("Domingo");
      }
    } else {
      Swal.fire({
        type: 'error',
        title: 'Debe seleccionar al menos un día o la hora inicial (Desde) debe ser menor a la hora final (Hasta)',
        showConfirmButton: false,
        timer: 2500
      })
    }
    if (agregoL || agregoM || agregoI || agregoJ || agregoV || agregoS || agregoD) {
      this.Set(true);
    } else {
      this.Set(false);
    }
  }

  GenerarHorarioPorAsignatura(dia: string): boolean {
    var inicio = this.hora_inicio;
    var final = this.hora_final;
    var curso = this.asignatura;
    var color = this.color;
    var i: boolean = false;
    if (dia == "Lunes") {
      const result = this.horarioAux[0].lunes.filter(element => element.id >= (inicio) && element.id <= (final));
      result.forEach(function (element) {
        element.h = curso;
        element.color = color;
        $("#0" + element.id).attr("style", "background:" + color + "");
        i = true;
      });
    }
    if (dia == "Martes") {
      const result = this.horarioAux[1].martes.filter(element => element.id >= (inicio) && element.id <= (final));
      result.forEach(function (element) {
        element.h = curso;
        element.color = color;
        $("#1" + element.id).attr("style", "background:" + color + "");
        i = true;
      });
    }
    if (dia == "Miercoles") {
      const result = this.horarioAux[2].miercoles.filter(element => element.id >= (inicio) && element.id <= (final));
      result.forEach(function (element) {
        element.h = curso;
        element.color = color;
        $("#2" + element.id).attr("style", "background:" + color + "");
        i = true;
      });
    }
    if (dia == "Jueves") {
      const result = this.horarioAux[3].jueves.filter(element => element.id >= (inicio) && element.id <= (final));
      result.forEach(function (element) {
        element.h = curso;
        element.color = color;
        $("#3" + element.id).attr("style", "background:" + color + "");
        i = true;
      });
    }
    if (dia == "Viernes") {
      const result = this.horarioAux[4].viernes.filter(element => element.id >= (inicio) && element.id <= (final));
      result.forEach(function (element) {
        element.h = curso;
        element.color = color;
        $("#4" + element.id).attr("style", "background:" + color + "");
        i = true;
      });
    }
    if (dia == "Sabado") {
      const result = this.horarioAux[5].sabado.filter(element => element.id >= (inicio) && element.id <= (final));
      result.forEach(function (element) {
        element.h = curso;
        element.color = color;
        $("#5" + element.id).attr("style", "background:" + color + "");
        i = true;
      });
    }
    if (dia == "Domingo") {
      const result = this.horarioAux[6].domingo.filter(element => element.id >= (inicio) && element.id <= (final));
      result.forEach(function (element) {
        element.h = curso;
        element.color = color;
        $("#6" + element.id).attr("style", "background:" + color + "");
        i = true;
      });
    }
    return i;
  }

  Set(validacion: boolean, remove: boolean = false) {
    if (validacion) {
      this.hora_final = null;
      this.hora_inicio = null;
      this.color = null;
      this.asignatura = null;
      $('#seleccionarLunes').prop('checked', false);
      $('#seleccionarMartes').prop('checked', false);
      $('#seleccionarMiercoles').prop('checked', false);
      $('#selccionarJueves').prop('checked', false);
      $('#seleccionaViernes').prop('checked', false);
      $('#selccionarSabado').prop('checked', false);
      $('#seleccionarDomingo').prop('checked', false);
      localStorage.setItem('Calendario', JSON.stringify(this.horarioAux));
      if (!remove) {
        Swal.fire({
          type: 'success',
          title: 'Asignatura agregada correctamente',
          showConfirmButton: false,
          timer: 2500
        })
      }
    } else {
      Swal.fire({
        type: 'error',
        title: 'Debe seleccionar al menos un día o la hora inicial (Desde) debe ser menor a la hora final (Hasta)',
        showConfirmButton: false,
        timer: 2500
      })
    }
  }
  public Get() {
    var i = localStorage.getItem('Calendario');
    var o = JSON.parse(i);
    return o;
  }
  public Remove(o:any = null) {
    this.horarioAux = this.horarioTem;
    localStorage.removeItem('Calendario');
    this.horarioAux[0].lunes.forEach(function (element) {
      element.h = "";
      element.color = "";
      $("#0" + element.id).attr("style", "background:white");
    });
    this.horarioAux[1].martes.forEach(function (element) {
      element.h = "";
      element.color = "";
      $("#1" + element.id).attr("style", "background:white");
    });
    this.horarioAux[2].miercoles.forEach(function (element) {
      element.h = "";
      element.color = "";
      $("#2" + element.id).attr("style", "background:white");
    });
    this.horarioAux[3].jueves.forEach(function (element) {
      element.h = "";
      element.color = "";
      $("#3" + element.id).attr("style", "background:white");
    });
    this.horarioAux[4].viernes.forEach(function (element) {
      element.h = "";
      element.color = "";
      $("#4" + element.id).attr("style", "background:white");
    });
    this.horarioAux[5].sabado.forEach(function (element) {
      element.h = "";
      element.color = "";
      $("#5" + element.id).attr("style", "background:white");
    });
    this.horarioAux[6].domingo.forEach(function (element) {
      element.h = "";
      element.color = "";
      $("#6" + element.id).attr("style", "background:white");
    });
    if(o!=null){
      this.horarioAux = o;
      localStorage.setItem('Calendario', JSON.stringify(this.horarioAux));
    }
    this.ngOnInit();
  }

  public EliminarAsignatura(dia: any, id: any) {
    if (dia == 0) {
      this.horarioAux[dia].lunes.forEach(function (element) {
        if (element.id == id) {
          element.h = "";
          element.color = "";
          $("#0" + id).attr("style", "background:white");
        }
      });
    }
    if (dia == 1) {
      this.horarioAux[dia].martes.forEach(function (element) {
        if (element.id == id) {
          element.h = "";
          element.color = "";
          $("#1" + id).attr("style", "background:white");
        }
      });
    }
    if (dia == 2) {
      this.horarioAux[dia].miercoles.forEach(function (element) {
        if (element.id == id) {
          element.h = "";
          element.color = "";
          $("#2" + id).attr("style", "background:white");
        }
      });
    }
    if (dia == 3) {
      this.horarioAux[dia].jueves.forEach(function (element) {
        if (element.id == id) {
          element.h = "";
          element.color = "";
          $("#3" + id).attr("style", "background:white");
        }
      });
    }
    if (dia == 4) {
      this.horarioAux[dia].viernes.forEach(function (element) {
        if (element.id == id) {
          element.h = "";
          element.color = "";
          $("#4" + id).attr("style", "background:white");
        }
      });
    }
    if (dia == 5) {
      this.horarioAux[dia].sabado.forEach(function (element) {
        if (element.id == id) {
          element.h = "";
          element.color = "";
          $("#5" + id).attr("style", "background:white");
        }
      });
    }
    if (dia == 6) {
      this.horarioAux[dia].domingo.forEach(function (element) {
        if (element.id == id) {
          element.h = "";
          element.color = "";
          $("#6" + id).attr("style", "background:white");
        }
      });
    }
    this.Set(true, true);
  }
  Color(){
    $("#inputState2").attr("style","background-color: " + this.color);
  }
}
