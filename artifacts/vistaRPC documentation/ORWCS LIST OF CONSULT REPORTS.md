---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCS LIST OF CONSULT REPORTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCS LIST OF CONSULT REPORTS{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORWCS](http://code.osehra.org/dox/Routine_ORWCS_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list on consult reports for aspecific patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of patient in the Patient file [^DPT].{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LIST^[ORWCS](http://code.osehra.org/dox/Routine_ORWCS_source.html)
 First comment | {::nomarkdown}RPC: ORWCS LIST OF CONSULT REPORTS<br/>See RPC definition for details on input and output parameters{:/}
 Input parameters | {::nomarkdown}DFN<br>SERV<br>BEGDT<br>ENDDT<br>STATUS{:/}
 Code | {::nomarkdown}  N ORI,ORX,ID,DATE,STAT,PROC,LN<br> IF '$D(SERV) N SERV S SERV=""<br> IF '$D(BEGDT) N BEG S BEGDT=""<br> IF '$D(ENDDT) N END S ENDDT=""<br> IF '$D(STATUS) N STATUS S STATUS=""<br> S LN=0<br> S ORY=$NA(^TMP("ORCS",$J)) K @ORY<br> D OER^GMRCSLM1(DFN,SERV,BEGDT,ENDDT,STATUS)<br> S ORI=0 F  S ORI=$O(^TMP("GMRCR",$J,"CS",ORI)) Q:'ORI  S ORX=$G(^(ORI,0)) D<br> . S ID=$P(ORX,U)<br> . S DATE=$P(ORX,U,2)<br> . S STAT=$P(ORX,U,3)<br> . S PROC=$P(ORX,U,5)<br> . IF PROC="Consult" S PROC=$$UP^XLFSTR($P(ORX,U,4)_" "_PROC)<br> . S LN=LN+1<br> . S @ORY@(LN,0)=ID_U_DATE_U_PROC_U_STAT{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}