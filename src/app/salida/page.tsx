"use client";
import Image from "next/image";
import { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

export default function SalidaPage() {
  const sigCanvas = useRef({});

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  const saveSignature = () => {
    // This saves the signature as a base64 encoded PNG image
    const signatureImage = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    console.log(signatureImage);
    // Here you can handle the saved signature, e.g., send it to a server
  };

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
            Detalle de Servicio
          </h1>
        </div>
        {/* Form */}
        <form className="flex flex-col gap-6">
          {/* Detalle diagnostico */}
          <div>
            <label className="block font-medium" htmlFor="detalleDiagnostico">
              Detalle diagnostico
            </label>
            <textarea id="detalleDiagnostico" name="detalleDiagnostico" rows={4} className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none"></textarea>
          </div>

          {/* Relacion de partes utilizadas */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Relacion de partes utilizadas</h3>
            <table className="w-full border-collapse border border-input-border">
              <thead>
                <tr>
                  <th className="border border-input-border p-2 bg-gray-100">Cantidad</th>
                  <th className="border border-input-border p-2 bg-gray-100">Numero de parte</th>
                  <th className="border border-input-border p-2 bg-gray-100">Descripcion</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, i) => (
                  <tr key={i}>
                    <td className="border border-input-border"><input type="text" className="w-full p-2 border-none focus:ring-0"/></td>
                    <td className="border border-input-border"><input type="text" className="w-full p-2 border-none focus:ring-0"/></td>
                    <td className="border border-input-border"><input type="text" className="w-full p-2 border-none focus:ring-0"/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Dictamen técnico sobre la falla */}
          <div className="grid grid-cols-2 gap-6 items-center">
            <div>
              <label className="block font-medium" htmlFor="dictamenTecnico">
                Dictamen técnico sobre la falla
              </label>
              <textarea id="dictamenTecnico" name="dictamenTecnico" rows={4} className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none"></textarea>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold mb-2">Se Repara:</h3>
              <div className="flex gap-8">
                <label className="flex flex-col items-center gap-2">
                  <span className="font-medium">En Tienda</span>
                  <input type="checkbox" name="reparacion" value="tienda" className="h-8 w-8 accent-primary"/>
                </label>
                <label className="flex flex-col items-center gap-2">
                  <span className="font-medium">Afuera de Tienda</span>
                  <input type="checkbox" name="reparacion" value="afuera" className="h-8 w-8 accent-primary"/>
                </label>
              </div>
            </div>
          </div>
          
          {/* Cotización de reparación */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Cotización de reparación</h3>
            <table className="w-full border-collapse border border-input-border">
              <thead>
                <tr>
                  <th className="border border-input-border p-2 bg-gray-100">Cantidad</th>
                  <th className="border border-input-border p-2 bg-gray-100">Concepto</th>
                  <th className="border border-input-border p-2 bg-gray-100">Costo</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, i) => (
                  <tr key={i}>
                    <td className="border border-input-border"><input type="text" className="w-full p-2 border-none focus:ring-0"/></td>
                    <td className="border border-input-border"><input type="text" className="w-full p-2 border-none focus:ring-0"/></td>
                    <td className="border border-input-border"><input type="text" className="w-full p-2 border-none focus:ring-0"/></td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2} className="text-right font-bold p-2">Total</td>
                  <td className="border border-input-border"><input type="text" readOnly className="w-full p-2 border-none bg-gray-50 focus:ring-0"/></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Comentarios de Reparación */}
          <div>
            <label className="block font-medium" htmlFor="comentariosReparacion">
              Comentarios de Reparación:
            </label>
            <textarea id="comentariosReparacion" name="comentariosReparacion" rows={3} className="mt-1 w-full border border-input-border rounded px-3 py-2 text-text placeholder:text-sidebar-text focus:border-primary focus:ring-2 focus:ring-primary outline-none"></textarea>
          </div>

          {/* Firma de Técnico */}
          <div>
            <label className="block font-medium">Firma de Técnico:</label>
            <div className="mt-1 border border-input-border rounded">
              <SignatureCanvas
                ref={sigCanvas}
                penColor='black'
                canvasProps={{ className: 'w-full h-32' }}
              />
            </div>
            <div className="flex gap-4 mt-2">
              <button type="button" onClick={clearSignature} className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors">Clear</button>
              <button type="button" onClick={saveSignature} className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">Save Signature</button>
            </div>
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
