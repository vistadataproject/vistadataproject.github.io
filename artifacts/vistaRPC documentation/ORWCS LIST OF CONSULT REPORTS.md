---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCS LIST OF CONSULT REPORTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCS LIST OF CONSULT REPORTS{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORWCS](http://code.osehra.org/dox/Routine_ORWCS_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list on consult reports for aspecific patient.{:/}


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}DFN<br/>SERV<br/>BEGDT<br/>ENDDT<br/>STATUS{:/}
 Lines | ```
 N ORI,ORX,ID,DATE,STAT,PROC,LN
 IF '$D(SERV) N SERV S SERV=""
 IF '$D(BEGDT) N BEG S BEGDT=""
 IF '$D(ENDDT) N END S ENDDT=""
 IF '$D(STATUS) N STATUS S STATUS=""
 S LN=0
 S ORY=$NA(^TMP("ORCS",$J)) K @ORY
 D OER^GMRCSLM1(DFN,SERV,BEGDT,ENDDT,STATUS)
 S ORI=0 F  S ORI=$O(^TMP("GMRCR",$J,"CS",ORI)) Q:'ORI  S ORX=$G(^(ORI,0)) D
 . S ID=$P(ORX,U)
 . S DATE=$P(ORX,U,2)
 . S STAT=$P(ORX,U,3)
 . S PROC=$P(ORX,U,5)
 . IF PROC="Consult" S PROC=$$UP^XLFSTR($P(ORX,U,4)_" "_PROC)
 . S LN=LN+1
 . S @ORY@(LN,0)=ID_U_DATE_U_PROC_U_STAT```
 Leading comment lines | {::nomarkdown}RPC: ORWCS LIST OF CONSULT REPORTS<br/>See RPC definition for details on input and output parameters{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of patient in the Patient file [^DPT].{:/} | 




 Generated on January 13th 2017, 6:55:28 am