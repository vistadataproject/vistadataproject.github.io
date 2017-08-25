---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDLR32 GET LAB TIMES<br/>
# ORWDLR32 GET LAB TIMES

Returns a list of lab collect times for a date and location.

## Properties

Property | Value
--- | ---
Label | GETLABTM
MUMPS Implementation | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATE | LITERAL | 12 | true | 
LOCATION | LITERAL | 12 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETLABTM^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Method Comment | Return list of lab collect times for a date and location
Input Parameters | ORDATE, ORLOC
Code | {::nomarkdown}<pre><code> N ORDA,ORTI,ORNOW,ORDOW,ORCTM,ORTI,X,%,%H<br/> S ORY(0)=0 Q:'$G(ORDATE)!($G(ORDATE)<0)!('$G(ORLOC))<br/> S ORDA=$P(ORDATE,".",1)<br/> S ORNOW=$$NOW^XLFDT,ORTI=$P(ORNOW,".",2)<br/> I ORDA<$P(ORNOW,".",1) S ORY(0)="-1^Dates in the past are not allowed." Q<br/> I '+$$GET^XPAR(ORLOC_";SC(","LR EXCEPTED LOCATIONS",1,"Q") D<br/> . S X=ORDA D DW^%DTC S ORDOW=X<br/> . I '+$$GET^XPAR("ALL","LR COLLECT "_ORDOW,1,"Q") S ORY(0)="-1^No collections on "_ORDOW Q<br/> . I '+$$GET^XPAR("ALL","LR IGNORE HOLIDAYS",1,"Q"),$D(^HOLIDAY(ORDA,0)) S ORY(0)="-1^No holiday collections" Q<br/> I +ORY(0)>-1 D <br/> . D GETLST^XPAR(.ORY,"ALL","LR PHLEBOTOMY COLLECTION","Q")<br/> . I +$G(ORY)=0 S ORY(0)="-1^No lab collect times defined for this division" Q<br/> S I=0 F  S I=$O(ORY(I)) Q:'I  D<br/> . D NOW^%DTC S ORTI=%,%H=+%H_","_+ORY(I) D YMD^%DTC<br/> . I (ORDA=$P(ORTI,".",1)),(+(ORDA+%)<+ORTI) K ORY(I) S ORY=ORY-1 Q   ; cutoff time has passed for this collect time<br/> . S ORY(I)=$P(ORY(I),U,2)<br/> I +$G(ORY)=0,('$D(ORY(0))) S ORY(0)="-1^All of today's collection times have passed."</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}