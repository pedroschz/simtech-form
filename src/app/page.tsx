import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-sidebar-bg flex flex-col items-center py-8 px-2 sm:px-0">
      <main className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 sm:p-10 flex flex-col gap-6 text-text" role="main" aria-labelledby="FormTitleId_titleAriaId">
        {/* Header and Title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/form-logo.png" alt="Form logo" width={140} height={30} className="h-[70px] w-auto" />
          </div>
        </div>
        <div id="FormTitleId_titleAriaId" className="mt-2">
          <h1 className="text-2xl font-bold text-primary" data-automation-id="formTitle">
            Solicitud de técnico GRUPO SIMTECH MX
          </h1>
        </div>
        {/* Form */}
        <form className="flex flex-col gap-6">
          {/* 1. Fecha de Solicitud */}
          <div>
            <label className="block font-medium" htmlFor="fechaSolicitud">
              1. Fecha de Solicitud <span className="text-red-500">*</span>
            </label>
            <input type="date" id="fechaSolicitud" name="fechaSolicitud" required className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>
          {/* 2. Nombre del solicitante */}
          <div>
            <label className="block font-medium" htmlFor="nombreSolicitante">
              2. Nombre del solicitante <span className="text-red-500">*</span>
            </label>
            <input type="text" id="nombreSolicitante" name="nombreSolicitante" required maxLength={4000} placeholder="Enter your answer" className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>
          {/* 3. Tipo de apoyo */}
          <div>
            <label className="block font-medium mb-1">
              3. Tipo de apoyo: <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col gap-2">
              <label className="inline-flex items-center gap-2"><input type="checkbox" name="tipoApoyo" value="Capacitación" className="accent-primary" /> Capacitación</label>
              <label className="inline-flex items-center gap-2"><input type="checkbox" name="tipoApoyo" value="Reparacion en PDS" className="accent-primary" /> Reparacion en PDS</label>
              <label className="inline-flex items-center gap-2"><input type="checkbox" name="tipoApoyo" value="Atencion a Clientes" className="accent-primary" /> Atencion a Clientes</label>
              <label className="inline-flex items-center gap-2"><input type="checkbox" name="tipoApoyo" value="Logistica" className="accent-primary" /> Logistica</label>
              <label className="inline-flex items-center gap-2"><input type="checkbox" name="tipoApoyo" value="Otro" className="accent-primary" /> Otro: <input type="text" name="tipoApoyoOtro" placeholder="Other" className="border border-input-border rounded px-2 py-1 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" /></label>
            </div>
          </div>
          {/* 4. Motivo de */}
          <div>
            <label className="block font-medium mb-1">
              4. Motivo de: <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col gap-2">
              <label className="inline-flex items-center gap-2"><input type="checkbox" name="motivo" value="Incremento de Volumen" className="accent-primary" /> Incremento de Volumen</label>
              <label className="inline-flex items-center gap-2"><input type="checkbox" name="motivo" value="Personal de Nuevo ingreso" className="accent-primary" /> Personal de Nuevo ingreso</label>
              <label className="inline-flex items-center gap-2"><input type="checkbox" name="motivo" value="Vacaciones de Personal" className="accent-primary" /> Vacaciones de Personal</label>
              <label className="inline-flex items-center gap-2"><input type="checkbox" name="motivo" value="Bajo desempeño. KPI" className="accent-primary" /> Bajo desempeño. KPI</label>
              <label className="inline-flex items-center gap-2"><input type="checkbox" name="motivo" value="Requerido por la Marca/Cliente" className="accent-primary" /> Requerido por la Marca/Cliente</label>
              <label className="inline-flex items-center gap-2"><input type="checkbox" name="motivo" value="Falta de Personal (Incapacidades, Ausencias, Renuncias)" className="accent-primary" /> Falta de Personal (Incapacidades, Ausencias, Renuncias)</label>
              <label className="inline-flex items-center gap-2"><input type="checkbox" name="motivo" value="Otro" className="accent-primary" /> Otro: <input type="text" name="motivoOtro" placeholder="Other" className="border border-input-border rounded px-2 py-1 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" /></label>
            </div>
          </div>
          {/* 5. Fecha de Inicio requerida */}
          <div>
            <label className="block font-medium" htmlFor="fechaInicio">
              5. Fecha de Inicio requerida: <span className="text-red-500">*</span>
            </label>
            <input type="date" id="fechaInicio" name="fechaInicio" required className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>
          {/* 6. Fecha de finalización */}
          <div>
            <label className="block font-medium" htmlFor="fechaFin">
              6. Fecha de finalización. <span className="text-red-500">*</span>
            </label>
            <input type="date" id="fechaFin" name="fechaFin" required className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>
          {/* 7. Punto de Servicio de destino */}
          <div>
            <label className="block font-medium" htmlFor="puntoServicio">
              7. Punto de Servicio de destino: <span className="text-red-500">*</span>
            </label>
            <input type="text" id="puntoServicio" name="puntoServicio" required maxLength={4000} placeholder="Enter your answer" className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>
          {/* 8. Horario requerido */}
          <div>
            <label className="block font-medium" htmlFor="horario">
              8. Horario requerido (Días por laborar y Horario) (Por ejemplo: L-V 10:00 a 20:00, L-S 11:00 a 20:00, Etc.) <span className="text-red-500">*</span>
            </label>
            <input type="text" id="horario" name="horario" required maxLength={4000} placeholder="Enter your answer" className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>
          {/* 9. Conocimientos requeridos (Likert) */}
          <div>
            <label className="block font-medium mb-2">
              9. Conocimientos requeridos: <span className="text-red-500">*</span>
            </label>
            <table className="w-full border border-input-border rounded text-sm">
              <thead>
                <tr>
                  <th className="text-left p-2">&nbsp;</th>
                  <th className="text-center p-2">Si</th>
                  <th className="text-center p-2">No</th>
                </tr>
              </thead>
              <tbody>
                {["Diagnóstico de equipos","Gestion de reparación (plataforma segun marca solicitada)","Galaxy Diagnostics","LMST","Reparar OW","Reparar LP","Realizar cotizaciones","Realizar formatos","Realizar Hojas SAW","Solicitar refacciones","Compra de refacciones","Atencion a clientes","Logisitica",].map((item, idx) => (
                  <tr key={item}>
                    <th className="text-left p-2 font-normal">{item}</th>
                    <td className="text-center"><input type="radio" name={`likert_${idx}`} value="Si" required aria-label="Si" className="accent-primary" /></td>
                    <td className="text-center"><input type="radio" name={`likert_${idx}`} value="No" required aria-label="No" className="accent-primary" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* 10. Comentarios especiales */}
          <div>
            <label className="block font-medium" htmlFor="comentarios">
              10. Comentarios especiales: <span className="text-red-500">*</span>
            </label>
            <input type="text" id="comentarios" name="comentarios" required maxLength={4000} placeholder="Enter your answer" className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>
          {/* Submit */}
          <div className="flex justify-center mt-4">
            <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary">Submit</button>
          </div>
        </form>
      </main>
    </div>
  );
}

