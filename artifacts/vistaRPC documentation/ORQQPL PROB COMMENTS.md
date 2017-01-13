---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL PROB COMMENTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL PROB COMMENTS{:/}
 tag | {::nomarkdown}GETCOMM{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of comments associated with a problem IEN.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return comments for a problem - MULTI-DIVISIONAL
 Input Parameters | {::nomarkdown}PIFN{:/}
 Lines | ```
 N FAC,NIFN,NOTE,NOTECNT
 S NOTECNT=0,FAC=0
 F  S FAC=$O(^AUPNPROB(PIFN,11,FAC)) Q:+FAC'>0  D
 . S NIFN=0
 . F  S NIFN=$O(^AUPNPROB(PIFN,11,FAC,11,NIFN)) Q:NIFN'>0  D
 . . Q:$P($G(^AUPNPROB(PIFN,11,FAC,11,NIFN,0)),U,4)'="A"
 . . S NOTE=$P($G(^AUPNPROB(PIFN,11,FAC,11,NIFN,0)),U,3)
 . . S NOTECNT=NOTECNT+1,ORY(NOTECNT)=NOTE```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Problem IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am