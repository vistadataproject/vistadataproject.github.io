---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL PROBLEM LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL PROBLEM LIST{:/}
 tag | {::nomarkdown}PROBL{:/}
 routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Problem list for CPRS GUI client{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | GET LIST OF PATIENT PROBLEMS
 Input Parameters | {::nomarkdown}DFN<br/>CONTEXT<br/>ORIDT{:/}
 Lines | ```
 N DIWL,DIWR,DIWF
 N ST,ORI,ORX
 S ORIDT=$G(ORIDT,DT)
 S (LCNT,NUM)=0
 S DIWL=1,DIWR=48,DIWF="C48"
 S CONTEXT=";;"_$G(CONTEXT)
 I CONTEXT=";;" S CONTEXT=";;A"
 S ST=$P(CONTEXT,";",3)
 I ST="R" D DELLIST(.ROOT,+DFN,ORIDT) ; show deleted only
 I ST'="R"  D LIST(.ROOT,+DFN,ST,ORIDT) ; show others - don't trust ELSE here
 I ROOT(0)<1 D
 . S LCNT=1
 . S ROOT(1)="     "_$$PAD^ORCHTAB("No data available.",49)_"|"```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}DFN{:/} | 




 Generated on January 13th 2017, 6:55:28 am