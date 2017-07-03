---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDLR32 LAB COLL TIME
# ORWDLR32 LAB COLL TIME

Is the given time a routine lab collection time for the given location?

Property | Value
--- | ---
Label | LABCOLTM
Routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Collection Time | LITERAL | 16 | true | Valid FileMan data/time string to check whether it is a valid labcollect time.
Location | LITERAL | 16 | true | Pointer to Hospital Location



### MUMPS Method Description

Property | Value
--- | ---
Method | [LABCOLTM^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Method Comment | Is this a routine lab collect time for this location?
Input Parameters | ORDATE, ORLOC
Code | {::nomarkdown}<pre><code> N ORDA,ORTI,ORDOW,ORCTM,I,X,Y<br/> S ORYN=0 Q:'$G(ORDATE)!($G(ORDATE)<0)!('$G(ORLOC))<br/> S ORDA=$P(ORDATE,".",1),ORTI=$P(ORDATE,".",2)<br/> S I=0 F  S I=$L(ORTI) Q:I>3  S ORTI=ORTI_"0"<br/> S X=ORDA D DW^%DTC S ORDOW=X<br/> D GETLST^XPAR(.ORCTM,"ALL","LR PHLEBOTOMY COLLECTION","Q")<br/> S I=0 F  S I=$O(ORCTM(I)) Q:'I  D<br/> . S:$P(ORCTM(I),U,2)=ORTI ORYN=1<br/> Q:ORYN=0<br/> I $G(ORLOC),$$GET^XPAR(ORLOC_";SC(","LR EXCEPTED LOCATIONS",1,"Q") S ORYN=1 Q<br/> I '$$GET^XPAR("ALL","LR IGNORE HOLIDAYS",1,"Q"),$D(^HOLIDAY(ORDA,0)) S ORYN=0 Q<br/> I $$GET^XPAR("ALL","LR COLLECT "_ORDOW,1,"Q") S ORYN=1 Q<br/> S ORYN=0</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}