import React, { useState } from "react";

import Button from "./Button";
import Input from "./Input";
import { Check } from "iconoir-react";
import TextArea from "./TextArea";

const FormSell = () => {
  const [userName, setUserName] = useState("");
  const receiveFromChild = (event: any) => {
    setUserName(event);
  };

  return (
    <section className="bg-[#F6F6F6] pb-28">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="flex items-center justify-center">
          <div className="w-[926px] p-6 md:p-10 lg:py-20 lg:px-36 bg-white border border-[#F6F6F6] relative mt-[-200px]">
            <h3 className="text-center text-[30px] text-[--color-secondary] pb-6">
              Vende con nosotros
            </h3>
            <form className="grid grid-cols-6 md:grid-cols-6 gap-8" action="">
              <div className="col-span-6 md:col-span-3">
                <Input
                  texto={""}
                  placeholder={"Nombres"}
                  name={"tutor"}
                  onValueChange={receiveFromChild}
                  type="text"
                />
              </div>
              <div className="col-span-6 md:col-span-3">
                <Input
                  texto={""}
                  placeholder={"Apellidos"}
                  name={"tutor"}
                  onValueChange={receiveFromChild}
                  type="text"
                />
              </div>
              <div className="col-span-6 md:col-span-3">
                <Input
                  texto={""}
                  placeholder={"Correo electrónico"}
                  name={"tutor"}
                  onValueChange={receiveFromChild}
                  type="text"
                />
              </div>
              <div className="col-span-6 md:col-span-3">
                <Input
                  texto={""}
                  placeholder={"Teléfono"}
                  name={"tutor"}
                  onValueChange={receiveFromChild}
                  type="text"
                />
              </div>
              <div className="col-span-6 md:col-span-3">
                <Input
                  texto={""}
                  placeholder={"Dirección del terreno"}
                  name={"tutor"}
                  onValueChange={receiveFromChild}
                  type="text"
                />
              </div>
              <div className="col-span-6 md:col-span-3">
                <Input
                  texto={""}
                  placeholder={"Metraje del terreno"}
                  name={"tutor"}
                  onValueChange={receiveFromChild}
                  type="text"
                />
              </div>
              <div className="col-span-6 md:col-span-6">
                <TextArea
                  texto={""}
                  placeholder={"MENSAJE"}
                  name={""}
                  onValueChange={receiveFromChild}
                />
              </div>
              <div className="col-span-6 md:col-span-6">
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="hidden" />
                    <div className="min-w-[24px] h-6 border-2 border-[--color-primary] rounded flex items-center justify-center hover:border-[--color-primary] transition duration-300">
                      <div className="hidden icon">
                        <Check
                          strokeWidth={"3"}
                          className="font-bold"
                          color="#009877"
                          height={20}
                          width={20}
                        />
                      </div>
                    </div>
                    <span className="ml-2 text-[#9B8F86]">
                      He leído y acepto la Políticas de Privacidad de Datos
                    </span>
                  </label>
                </div>
              </div>
              <div className="col-span-6 md:col-span-6 flex items-center justify-center">
                <Button
                  extraStyles="w-[205px] h-[50px] btn-primary"
                  label={"enviar"}
                  customClick={(event) => console.log(event)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSell;
