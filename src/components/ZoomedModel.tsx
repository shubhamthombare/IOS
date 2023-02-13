import {
	IonButton,
	IonButtons,
	IonCard,
	IonCol,
	IonGrid,
	IonImg,
	IonItem,
	IonModal,
	IonRow,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchApplicationDocumentRead } from '../services/ApplicationDetail.Service';
import { CommonService } from '../services/Common.Service';
import { Constants } from '../utils/constants';

interface props {
	imgsrc: string;
	triggerName: string;
	data: object;
	file: object;
	type: string;
}
const ZoomedModel: React.FC<props> = ({
	imgsrc,
	triggerName,
	data,
	file,
	type,
}) => {
	const modal = useRef<HTMLIonModalElement>(null);
	const { t } = useTranslation();

	function dismiss() {
		modal.current?.dismiss();
	}

	const readDocument = async (file: any) => {
		let obj = {
			fileId: file.fileId,
		};

		let res = await fetchApplicationDocumentRead(obj);
		if (res.status === Constants.API_SUCCESS) {
			CommonService.readFilesPDF(res.data, file.fileType, file.fileId);
		}
	};

	const objectToData = (data: object) => {
		return Object.entries(data).map((item) => {
			return (
				<IonRow className='mb-5'>
					<IonCol size='auto'>
						<div className='inbox-profile'></div>
					</IonCol>
					<IonCol>
						<div>
							<p className='fs-14 fw-400 mb-5'>
								{CommonService.camelToTitle(item[0])}
							</p>
							<p className='fs-14 fw-600'>
								{typeof item[1] === 'object' ? objectToData(item[1]) : item[1]}
							</p>
						</div>
					</IonCol>
				</IonRow>
			);
		});
	};

	return (
		<IonModal id='zoom-modal' ref={modal} trigger={triggerName}>
			<div className='item-transparent no-shadow'>
				<IonToolbar className='item-transparent'>
					<IonButtons slot='end'>
						<IonButton color='light' onClick={() => dismiss()}>
							<IonImg
								className=''
								src='./img/cross-transparent.svg'
								alt='cross'
							></IonImg>
						</IonButton>
					</IonButtons>
				</IonToolbar>
				<IonCard className='br-8 max-h500 overflow-a mt-0 py-10'>
					<IonItem lines='none'>
						{type && <IonTitle className='fs-14 fw-600 '>{type}</IonTitle>}
					</IonItem>
					<IonItem lines='none' className='mt-5 item-transparent'>
						<IonImg
							onClick={() => readDocument(file)}
							className='secondary-bg p-10 mx-auto'
							alt='document'
							src={imgsrc}
						/>
					</IonItem>
					{data && (
						<IonItem lines='none' className='py-10 item-transparent'>
							<IonGrid>
								<IonRow>
									<IonCol>
										<h3 className='fs-18 fw-700'>{t('FIELDS_TAB')}</h3>
									</IonCol>
								</IonRow>
								{objectToData(data)}
							</IonGrid>
						</IonItem>
					)}
				</IonCard>
			</div>
		</IonModal>
	);
};

export default ZoomedModel;
