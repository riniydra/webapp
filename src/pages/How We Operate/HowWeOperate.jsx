import React from "react";
import { useTranslation } from "react-i18next";
import HOWWEOPERATEIMG from "../../assets/howWeOperate.jpeg";
import howWeOperateData from "../How We Operate/HowWeOperateData.js";

const HowWeOperate = () => {
  const { t } = useTranslation();
  return (
    <div className="px-20 mt-6">
      <div>
        <h1 className="text-3xl font-semibold text-center">
          {t("HOW_WE_OPERATE")}
        </h1>
        <div className="flex">
          <div className="w-5/12">
            <a href="https://youtu.be/9CBLVoSSuwM">
              <img
                src={HOWWEOPERATEIMG}
                alt="how we operate"
                className="h-96 mt-5"
              />
            </a>
          </div>
          <div className="flex flex-col text-left justify-center w-7/12">
            {howWeOperateData.map((item, key) => (
              <div key={key}>
                <h1 className="mt-5 text-lg font-semibold px-5">
                  {t(item.heading)}
                </h1>
                <p className="text-sm px-5">{t(item.points)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeOperate;
