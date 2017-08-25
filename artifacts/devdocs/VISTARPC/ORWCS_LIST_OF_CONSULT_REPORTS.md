---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWCS LIST OF CONSULT REPORTS<br/>
# ORWCS LIST OF CONSULT REPORTS

This remote procedure call returns a list on consult reports for aspecific patient.

## Properties

Property | Value
--- | ---
Label | LIST
MUMPS Implementation | [ORWCS](http://code.osehra.org/dox/Routine_ORWCS_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Internal entry number of patient in the Patient file [^DPT].



## MUMPS Method Description

Property | Value
--- | ---
Method | [LIST^ORWCS](http://code.osehra.org/dox/Routine_ORWCS_source.html)
Input Parameters | DFN, SERV, BEGDT, ENDDT, STATUS
First Comment | {::nomarkdown}<pre><code>  RPC: ORWCS LIST OF CONSULT REPORTS<br/>  See RPC definition for details on input and output parameters<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORI,ORX,ID,DATE,STAT,PROC,LN<br/> IF '$D(SERV) N SERV S SERV=""<br/> IF '$D(BEGDT) N BEG S BEGDT=""<br/> IF '$D(ENDDT) N END S ENDDT=""<br/> IF '$D(STATUS) N STATUS S STATUS=""<br/> S LN=0<br/> S ORY=$NA(^TMP("ORCS",$J)) K @ORY<br/> D OER^GMRCSLM1(DFN,SERV,BEGDT,ENDDT,STATUS)<br/> S ORI=0 F  S ORI=$O(^TMP("GMRCR",$J,"CS",ORI)) Q:'ORI  S ORX=$G(^(ORI,0)) D<br/> . S ID=$P(ORX,U)<br/> . S DATE=$P(ORX,U,2)<br/> . S STAT=$P(ORX,U,3)<br/> . S PROC=$P(ORX,U,5)<br/> . IF PROC="Consult" S PROC=$$UP^XLFSTR($P(ORX,U,4)_" "_PROC)<br/> . S LN=LN+1<br/> . S @ORY@(LN,0)=ID_U_DATE_U_PROC_U_STAT</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}