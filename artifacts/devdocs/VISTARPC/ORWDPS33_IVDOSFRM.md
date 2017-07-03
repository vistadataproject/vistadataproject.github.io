---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS33 IVDOSFRM
# ORWDPS33 IVDOSFRM



Property | Value
--- | ---
Label | IVDOSFRM
Routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORDERIDS | LIST |  | true | 
DEFAULTS | LITERAL |  | true | 
ALLIV | LITERAL |  | true | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [IVDOSFRM^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Input Parameters | ORDERIDS, ALLIV
Code | {::nomarkdown}<pre><code> N ORARRAY,CNT,CNT1,OI,POI<br/> S OI="",CNT=0,CNT1=0<br/> F  S OI=$O(ORDERIDS(OI)) Q:OI'>0  D<br/> .S POI=+$P($G(^ORD(101.43,$G(ORDERIDS(OI)),0)),U,2) Q:POI'>0<br/> .S CNT=CNT+1<br/> .S ORARRAY(CNT)=POI<br/> I CNT=0 Q<br/> S ORARRAY(0)=CNT<br/> D START1^PSSJORDF(.ORARRAY,ALLIV)<br/> S CNT="" F  S CNT=$O(ORARRAY(CNT)) Q:CNT'>0  D<br/> .S CNT1=CNT1+1,LST(CNT1)=$G(ORARRAY(CNT))<br/> K ^TMP("PSJMR",$J)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}