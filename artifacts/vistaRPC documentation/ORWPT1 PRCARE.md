---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT1 PRCARE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT1 PRCARE{:/}
 tag | {::nomarkdown}PRCARE{:/}
 routine | [ORWPT1](http://code.osehra.org/dox/Routine_ORWPT1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return primary care information for a patient in the format:  VAL=Primary Care Team^Primary Care Provider^Attending^MH Treatment      Coordinator{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return Primary Care info for CPRS Header
 Input Parameters | {::nomarkdown}PATIENT{:/}
 Lines | ```{::nomarkdown} N PCT,PCP,ATT,ASS,MHTC,INPROV,MHSTR<br/> S (PCT,PCP,ATT,ASS,MHTC,INPROV,MHSTR)=""<br/> IF $GET(XQCY0)["CPRSChart" DO  ;check calling source<br/> . S PCT=$$CPRSHEAD^SCMCWSUT(PATIENT) ;387<br/> ELSE  DO<br/> . S PCT=$P($$OUTPTTM^SDUTL3(PATIENT,DT),U,2)<br/> . S PCP=$P($$OUTPTPR^SDUTL3(PATIENT,DT),U,2)<br/> . S ASS=$P($$OUTPTAP^SDUTL3(PATIENT,DT),U,2)<br/> S ATT=$G(^DPT(PATIENT,.1041)) I ATT S ATT=$P($G(^VA(200,ATT,0)),U)<br/> S MHSTR=$$START^SCMCMHTC(PATIENT) ;387<br/> S MHTC=$S($P(MHSTR,U,2)'="":$P(MHSTR,U,2)_" / "_$P(MHSTR,U,5),1:"") ;387 - mhtc/mh team<br/> S INPROV=$G(^DPT(PATIENT,.104)) I INPROV S INPROV=$P($G(^VA(200,INPROV,0)),U)<br/> S VAL=PCT_U_PCP_U_ATT_U_ASS_U_MHTC_U_INPROV```{:/}
 Leading comment lines | {::nomarkdown}Input - PATIENT = Patient DFN<br/>Output - VAL = Primary Care Team^PCP^Attending^AP^MH Treatment Coordinator/MH Team^Inpatient Provider<br/>for PCMM Web VAL = Primary Care Team/PCP/AP^^Attending^^MH Treatment Coordinator/MH Team^Inpatient Provider<br/>Source of PACT/PCP data for CPRS is 404.41/.06 - 387<br/>Other callers will get original data format<br/>ICR #6042 - SCMC PCMM/R GET PRIMARY CARE SUMMARY {:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}dfn{:/} |  |  |  |  | 




 Generated on January 13th 2017, 7:11:26 am