import axios from "axios";
import { Constants } from "../utils/constants";
import { CommonService } from "./Common.Service";
import _ from "lodash";

export async function fetchApplicationActyvScoreNew(obj: any) {
  try {
    const actyvScoreAPI = Constants.APPLICATION_ACTYV_SCORE_API;
    const apiUrl = `${process.env.REACT_APP_ACTYV_SCORE_URL}${actyvScoreAPI}${obj.businessPartnerId}`;
    let dataObj = {
      type: "get",
      url: apiUrl,
    };
    return CommonService.fetchData(dataObj);
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return {
        status: Constants.API_FAIL,
        message: e.message,
      };
    } else {
      return { status: Constants.API_FAIL, message: Constants.API_FAIL_MSG };
    }
  }
}

export function getFinOverviewData(reportData: any) {
  let data = reportData?.reportData;
  let pickLatestKey = Constants.PICK_LATEST_OVERVIEW_ATT;
  let overviewData = [];
  for (let latestKey of pickLatestKey) {
    let overviewDataObj = {
      key: "",
      value: "",
    };
    let retObj = CommonService.findNestedObj(data, "title", latestKey.key);
    if (retObj) {
      overviewDataObj.key = latestKey.key;
      overviewDataObj.value = retObj?.year2;
      overviewData.push(overviewDataObj);
    }
  }
  _.each(overviewData, function (item) {
    item.key = _.find(Constants.PICK_LATEST_OVERVIEW_ATT, {
      key: item.key,
    }).label;
  });
  return overviewData;
}
