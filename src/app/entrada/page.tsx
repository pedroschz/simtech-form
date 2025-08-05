import Image from "next/image";

export default function EntradaPage() {
  return (
    <div className="min-h-screen bg-sidebar-bg flex flex-col items-center py-8 px-2 sm:px-0">
      <main className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 sm:p-10 flex flex-col gap-6 text-text" role="main" aria-labelledby="FormTitleId_titleAriaId">
        {/* Header and Title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/form-logo.png" alt="Form logo" width={140} height={30} className="h-[70px] w-auto" />
          </div>
        </div>
        <div id="FormTitleId_titleAriaId" className="mt-2 text-center">
          <h1 className="text-2xl font-bold text-primary" data-automation-id="formTitle">
            Centro de Servicio Autorizado
          </h1>
          <h2 className="text-xl font-semibold text-gray-600">
            Orden de Servicio
          </h2>
        </div>
        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Folio */}
          <div className="md:col-span-1">
            <label className="block font-medium" htmlFor="folio">
              Folio
            </label>
            <input type="text" id="folio" name="folio" placeholder="PH-POL-IW00061" className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>

          {/* Fecha elaboración */}
          <div className="md:col-span-1">
            <label className="block font-medium" htmlFor="fechaElaboracion">
              Fecha elaboración
            </label>
            <input type="date" id="fechaElaboracion" name="fechaElaboracion" className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>

          {/* Nombre del cliente */}
          <div className="md:col-span-1">
            <label className="block font-medium" htmlFor="nombreCliente">
              Nombre del cliente
            </label>
            <input type="text" id="nombreCliente" name="nombreCliente" className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>

          {/* Teléfono */}
          <div className="md:col-span-1">
            <label className="block font-medium" htmlFor="telefono">
              Teléfono
            </label>
            <input type="tel" id="telefono" name="telefono" className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>

          {/* Email */}
          <div className="md:col-span-1">
            <label className="block font-medium" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" name="email" className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>

          {/* WhatsApp */}
          <div className="md:col-span-1">
            <label className="block font-medium" htmlFor="whatsapp">
              WhatsApp
            </label>
            <input type="tel" id="whatsapp" name="whatsapp" className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>

          {/* Producto */}
          <div className="md:col-span-2">
            <label className="block font-medium" htmlFor="producto">
              Producto
            </label>
            <input type="text" id="producto" name="producto" className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>

          {/* Numero de Serie */}
          <div className="md:col-span-1">
            <label className="block font-medium" htmlFor="numeroSerie">
              Numero de Serie
            </label>
            <input type="text" id="numeroSerie" name="numeroSerie" className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>

          {/* Modelo */}
          <div className="md:col-span-1">
            <label className="block font-medium" htmlFor="modelo">
              Modelo
            </label>
            <input type="text" id="modelo" name="modelo" className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>

          {/* Color */}
          <div className="md:col-span-1">
            <label className="block font-medium" htmlFor="color">
              Color
            </label>
            <input type="text" id="color" name="color" className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>

          {/* Empaque/Accesorios */}
          <div className="md:col-span-1">
            <label className="block font-medium" htmlFor="empaqueAccesorios">
              Empaque/Accesorios
            </label>
            <input type="text" id="empaqueAccesorios" name="empaqueAccesorios" className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none" />
          </div>

          {/* Falla reportada */}
          <div className="md:col-span-2">
            <label className="block font-medium" htmlFor="fallaReportada">
              Falla reportada
            </label>
            <textarea id="fallaReportada" name="fallaReportada" rows={3} className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none"></textarea>
          </div>
          
          {/* Estado físico equipo */}
          <div className="md:col-span-2">
            <label className="block font-medium" htmlFor="estadoFisico">
              Estado físico equipo
            </label>
            <textarea id="estadoFisico" name="estadoFisico" rows={3} className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none"></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary">Submit</button>
          </div>
        </form>
      </main>
    </div>
  );
}
