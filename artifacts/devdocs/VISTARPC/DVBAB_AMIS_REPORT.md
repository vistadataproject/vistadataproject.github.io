---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBAB AMIS REPORT
# DVBAB AMIS REPORT

Returns an AMIS report for specified search criteria.

Property | Value
--- | ---
Label | STRT
Routine | [DVBAB3](http://code.osehra.org/dox/Routine_DVBAB3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BDATE | LITERAL |  | true | Beginning date in a date range to use for retrieving results for the report.
EDATE | LITERAL |  | true | Ending date in a date range to use for retrieving results for the report.
RONUM | LITERAL |  | true | This is an optional parameter that has 2 optional pieces:      REGIONAL OFFICE^DIVISIONIf this parameter is defined, then the report logic will filter the results by the Regional Office number passed and/or Division. Regional Office should always be included in the 1st &#x27;^&#x27; delimited piece and the Division should always be included in the 2nd &#x27;^&#x27; delimited piece if values are to be passed. If the 1st &#x27;^&#x27; delimited piece is undefined, null or 0 then results for all Regional Offices (RO) will be returned. If Division is undefined, null or 0, then results for all Divisions will be returned.
SBULL | LITERAL |  | true | A Y/N value which indicates whether a bulletin should be generated when the processing has completed.
DUZ | LITERAL |  | true | Identifies the individual in the NEW PERSON File (#200) who should recieve the bulletin generated.
DVBAPRTY | LITERAL | 4 | true | Priority of Exam code which inidicates which priorities to filter on.   AO   : Agent Orange   BDD  : Benefits Delivery at Discharge and Quick Start   IDES : Integrated Disability Evaluation System   ALL  : All Others (Original Report with all codes except those above)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}