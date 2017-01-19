---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL PROBLEM LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL PROBLEM LIST{:/}
 tag | {::nomarkdown}PROBL{:/}
 routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Problem list for CPRS GUI client{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}DFN{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PROBL^[ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 Method comment | GET LIST OF PATIENT PROBLEMS
 Input parameters | {::nomarkdown}DFN<br>CONTEXT<br>ORIDT{:/}
 Code | {::nomarkdown}  N DIWL,DIWR,DIWF<br> N ST,ORI,ORX<br> S ORIDT=$G(ORIDT,DT)<br> S (LCNT,NUM)=0<br> S DIWL=1,DIWR=48,DIWF="C48"<br> S CONTEXT=";;"_$G(CONTEXT)<br> I CONTEXT=";;" S CONTEXT=";;A"<br> S ST=$P(CONTEXT,";",3)<br> I ST="R" D DELLIST(.ROOT,+DFN,ORIDT) ; show deleted only<br> I ST'="R"  D LIST(.ROOT,+DFN,ST,ORIDT) ; show others - don't trust ELSE here<br> I ROOT(0)<1 D<br> . S LCNT=1<br> . S ROOT(1)="     "_$$PAD^ORCHTAB("No data available.",49)_"|"{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}