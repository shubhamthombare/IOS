import { Field } from '@data-driven-forms/react-form-renderer';
import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCol,
	IonGrid,
	IonImg, IonRow,
	IonTextarea
} from '@ionic/react';
import _ from "lodash";
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { saveDecision } from '../services/ApplicationDetail.Service';
import { Constants } from '../utils/constants';
import { IAssignAction } from '../utils/models/ApplicationEnterpriseView.interface';
import { toast } from "react-toastify";

var classNames = require('classnames');

const DecisionPanel: React.FC<{
	actions: IAssignAction[],
	formKey: string,
	formConfig: Field[],
	selectedDocuments?: object,
	selectedForms?: object,
	applicationId: string,
	applicationDetails: object
}> = ({
	actions,
	formKey,
	formConfig,
	selectedDocuments = {},
	selectedForms = {},
	applicationId = "",
	applicationDetails = null

}) => {
		const { t } = useTranslation();
		const [decision, setDecision] = useState<IAssignAction>();
		const [remarks, setRemarks] = useState<string>("");
		const [isDecisionLoading, setIsDecisionLoading] = useState(false);
		let history = useHistory();

		const updateDecision = useCallback(async () => {
			const documentIdsToCorrect: string[] = _.filter(
				_.keys(selectedDocuments),
				doc => Boolean(_.get(selectedDocuments, doc, false))
			);
			const formKeysToCorrect: string[] = _.filter(
				_.keys(selectedForms),
				form => Boolean(_.get(selectedForms, form, false))
			);
			if (
				decision?.actionType === "CORRECTION" &&
				documentIdsToCorrect.length <= 0
			) {
				toast(t("SELECT_ATLEAST_1_DOC"));
				return;
			}
			setIsDecisionLoading(true);
			const response = await saveDecision({
				remarks,
				decision,
				applicationId,
				correctionItems: {
					documentIds: documentIdsToCorrect,
					formKeys: formKeysToCorrect,
				},
			}, applicationDetails['businessPartnerId']);
			setIsDecisionLoading(false);
			if (response.status === Constants.API_SUCCESS) {
				if (response.data.success) {
					toast.success(response.data.message)
					setTimeout(() => {
						history.goBack()
					}, 1000)
				} else {
					toast.warning(response.data.message);
				}
			}
			else {
				toast.error(response.message)
			}

		}, [applicationId, decision, remarks, selectedDocuments]);


		const renderConfirmButton = () => {
			if (!_.isEmpty(formKey) && !_.isEmpty(formConfig)) {
				return (
					<>
						<IonButton
							disabled={_.isEmpty(remarks) || _.isEmpty(decision) || isDecisionLoading}
							className='fs-14 fw-700 my-0 button-expand'
							type='submit'
							form="approval-detail-form"
							expand='block'
						>
							{t('SUBMIT')}
						</IonButton>
					</>
				);
			} else {
				return (
					<>
						<IonButton
							disabled={_.isEmpty(remarks) || _.isEmpty(decision) || isDecisionLoading}
							className='fs-14 fw-700 my-0 button-expand'
							expand='block'
							onClick={updateDecision}
						>
							{t('SUBMIT')}
						</IonButton>
					</>
				);
			}
		};

		return (
			<IonCard className='overflow-visible primary-card no-shadow border-1 br-8'>
				<IonCardContent className=''>
					<h3 className='fs-14 fw-400'>{t('DECISION_PANEL')}</h3>

					<IonCard className='mx-0 overflow-visible primary-card no-shadow border-1 br-8'>
						<IonCardContent>
							<IonGrid>
								<IonRow>
									<IonCol>
										<p className='dark'>{t('PICK_DECISION_STRATEGY')}</p>
									</IonCol>
								</IonRow>
							</IonGrid>

							<IonGrid>
								<IonRow>
									{actions?.map((action, index) => (
										<>
											<IonCol key={index}>
												<IonButton
													className={
														classNames(
															"approve-btn",
															"fw-600",
															"fs-16",
															"no-shadow",
															{
																"decision-active": decision === action
															}
														)
													}
													expand='block'
													onClick={() => setDecision(action)}

												>
													{action.label}
												</IonButton>
											</IonCol>
										</>
									))}
								</IonRow>
							</IonGrid>
						</IonCardContent>
						<div className='card-divider'></div>
						<IonCardContent className='inbox-textarea'>
							<div>
								<p className='fs-12 fw-600 dark'> {t('COMMENT')}</p>

								<IonTextarea
									className='inbox-textarea-inner p-relative'
									placeholder={t("ENTER_COMMENT")}
									value={remarks}
									onIonChange={event => setRemarks(event.detail.value)}
								>
									<IonImg src='./img/sms.svg'></IonImg>
								</IonTextarea>

								<IonGrid>
									<IonRow className='submit-btn-wrap ion-justify-content-center'>
										<IonCol size='8'>
											{renderConfirmButton()}
										</IonCol>
									</IonRow>
								</IonGrid>
							</div>
						</IonCardContent>
					</IonCard>
				</IonCardContent>
			</IonCard>
		);
	};

export default DecisionPanel;
