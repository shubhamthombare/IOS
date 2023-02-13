import {
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonPage,
  IonRouterLink,
  IonRow,
  IonSearchbar
} from "@ionic/react";
import React from "react";
import { useTranslation } from 'react-i18next';
import Header from "../components/Header";
import "./Page.css";


const BusinessPartner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonSearchbar
          className="mb-22 business-searchbar px-0 py-0"
          placeholder=""
        ></IonSearchbar>

        <IonGrid>
          <h4 className="ion-padding-horizontal fs-20 fw-700 dark">
          {t("BUSINESS_PARTNERS")}
          </h4>
        </IonGrid>

        <IonRouterLink routerLink="/app/business-partner/business-score">
          <IonCard className="primary-card br-8">
            <IonCardContent className="card-content">
              <IonRow className="ion-align-items-center">
                <IonCol size="auto" className="pl-0 py-0">
                  <div className="profile-wrap">
                    <IonImg className="with-profile  d-none"></IonImg>
                    <h4 className="without-profile fs-22 fw-700">J</h4>
                  </div>
                </IonCol>
                <IonCol size="5" className="pr-0 py-0">
                  <h3 className="fs-16 fw-600">Jumbo Traders</h3>
                </IonCol>
                <IonCol className="ion-align-self-start ion-text-right">
                  <p className="fs-10 fw-400">Joined On : 24 Aug 2022</p>
                </IonCol>
                <IonCol
                  className="px-0 py-0 d-flex ion-align-items-center"
                  size="auto"
                >
                  <svg
                    width="7"
                    height="13"
                    viewBox="0 0 7 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.27593 5.73812C6.4634 5.94051 6.56872 6.21499 6.56872 6.50117C6.56872 6.78736 6.4634 7.06183 6.27593 7.26423L1.68293 12.2214C1.49664 12.4184 1.24583 12.5282 0.985 12.5267C0.724171 12.5253 0.4744 12.4129 0.289964 12.2138C0.105528 12.0147 0.00132999 11.7452 1.26439e-05 11.4637C-0.00130471 11.1822 0.100365 10.9115 0.282929 10.7104L4.18293 6.50117L0.282929 2.29195C0.100365 2.09089 -0.00130471 1.82019 1.26439e-05 1.53868C0.00132999 1.25718 0.105528 0.9876 0.289964 0.788541C0.4744 0.589481 0.724171 0.477021 0.985 0.4756C1.24583 0.474178 1.49664 0.583909 1.68293 0.780947L6.27593 5.73812V5.73812Z"
                      fill="#A7A7A7"
                    />
                  </svg>
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>
        </IonRouterLink>

        <IonRouterLink routerLink="/app/business-partner/business-score">
          <IonCard className="primary-card br-8">
            <IonCardContent className="card-content">
              <IonRow className="ion-align-items-center">
                <IonCol size="auto" className="py-0 pl-0">
                  <div className="profile-wrap">
                    <IonImg
                      src="./img/star.svg"
                      className="with-profile"
                    ></IonImg>
                    <h4 className="without-profile d-none fs-22 fw-700">J</h4>
                  </div>
                </IonCol>
                <IonCol size="5" className="py-0 pr-0">
                  <h3 className="fs-16 fw-600 ellipse">M Star Home Appl....</h3>
                </IonCol>
                <IonCol className="py-0 ion-align-self-start ion-text-right">
                  <p className="fs-10 fw-400">Joined On : 24 Aug 2022</p>
                </IonCol>
                <IonCol
                  className="px-0 py-0 d-flex ion-align-items-center"
                  size="auto"
                >
                  <svg
                    width="7"
                    height="13"
                    viewBox="0 0 7 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.27593 5.73812C6.4634 5.94051 6.56872 6.21499 6.56872 6.50117C6.56872 6.78736 6.4634 7.06183 6.27593 7.26423L1.68293 12.2214C1.49664 12.4184 1.24583 12.5282 0.985 12.5267C0.724171 12.5253 0.4744 12.4129 0.289964 12.2138C0.105528 12.0147 0.00132999 11.7452 1.26439e-05 11.4637C-0.00130471 11.1822 0.100365 10.9115 0.282929 10.7104L4.18293 6.50117L0.282929 2.29195C0.100365 2.09089 -0.00130471 1.82019 1.26439e-05 1.53868C0.00132999 1.25718 0.105528 0.9876 0.289964 0.788541C0.4744 0.589481 0.724171 0.477021 0.985 0.4756C1.24583 0.474178 1.49664 0.583909 1.68293 0.780947L6.27593 5.73812V5.73812Z"
                      fill="#A7A7A7"
                    />
                  </svg>
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>
        </IonRouterLink>

        <IonCard className="primary-card br-8">
          <IonCardContent className="card-content">
            <IonRow className="ion-align-items-center">
              <IonCol size="auto" className="pl-0 py-0">
                <div className="profile-wrap">
                  <IonImg className="with-profile  d-none"></IonImg>
                  <h4 className="without-profile fs-22 fw-700">J</h4>
                </div>
              </IonCol>
              <IonCol size="5" className="pr-0 py-0">
                <h3 className="fs-16 fw-600">Jumbo Traders</h3>
              </IonCol>
              <IonCol className="ion-align-self-start ion-text-right">
                <p className="fs-10 fw-400">Joined On : 24 Aug 2022</p>
              </IonCol>
              <IonCol
                className="px-0 py-0 d-flex ion-align-items-center"
                size="auto"
              >
                <svg
                  width="7"
                  height="13"
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.27593 5.73812C6.4634 5.94051 6.56872 6.21499 6.56872 6.50117C6.56872 6.78736 6.4634 7.06183 6.27593 7.26423L1.68293 12.2214C1.49664 12.4184 1.24583 12.5282 0.985 12.5267C0.724171 12.5253 0.4744 12.4129 0.289964 12.2138C0.105528 12.0147 0.00132999 11.7452 1.26439e-05 11.4637C-0.00130471 11.1822 0.100365 10.9115 0.282929 10.7104L4.18293 6.50117L0.282929 2.29195C0.100365 2.09089 -0.00130471 1.82019 1.26439e-05 1.53868C0.00132999 1.25718 0.105528 0.9876 0.289964 0.788541C0.4744 0.589481 0.724171 0.477021 0.985 0.4756C1.24583 0.474178 1.49664 0.583909 1.68293 0.780947L6.27593 5.73812V5.73812Z"
                    fill="#A7A7A7"
                  />
                </svg>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>

        <IonCard className="primary-card br-8">
          <IonCardContent className="card-content">
            <IonRow className="ion-align-items-center">
              <IonCol size="auto" className="py-0 pl-0">
                <div className="profile-wrap">
                  <IonImg
                    src="./img/star.svg"
                    className="with-profile"
                  ></IonImg>
                  <h4 className="without-profile d-none fs-22 fw-700">J</h4>
                </div>
              </IonCol>
              <IonCol size="5" className="py-0 pr-0">
                <h3 className="fs-16 fw-600 ellipse">M Star Home Appl....</h3>
              </IonCol>
              <IonCol className="py-0 ion-align-self-start ion-text-right">
                <p className="fs-10 fw-400">Joined On : 24 Aug 2022</p>
              </IonCol>
              <IonCol
                className="px-0 py-0 d-flex ion-align-items-center"
                size="auto"
              >
                <svg
                  width="7"
                  height="13"
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.27593 5.73812C6.4634 5.94051 6.56872 6.21499 6.56872 6.50117C6.56872 6.78736 6.4634 7.06183 6.27593 7.26423L1.68293 12.2214C1.49664 12.4184 1.24583 12.5282 0.985 12.5267C0.724171 12.5253 0.4744 12.4129 0.289964 12.2138C0.105528 12.0147 0.00132999 11.7452 1.26439e-05 11.4637C-0.00130471 11.1822 0.100365 10.9115 0.282929 10.7104L4.18293 6.50117L0.282929 2.29195C0.100365 2.09089 -0.00130471 1.82019 1.26439e-05 1.53868C0.00132999 1.25718 0.105528 0.9876 0.289964 0.788541C0.4744 0.589481 0.724171 0.477021 0.985 0.4756C1.24583 0.474178 1.49664 0.583909 1.68293 0.780947L6.27593 5.73812V5.73812Z"
                    fill="#A7A7A7"
                  />
                </svg>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default BusinessPartner;
