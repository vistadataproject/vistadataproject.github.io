---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL USER PROB CATS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL USER PROB CATS{:/}
 tag | {::nomarkdown}CAT{:/}
 routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}rETURNS ARRAY OF CATEGORIES FOR USER TO SELECT FROM{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get user category list
 Input Parameters | {::nomarkdown}ORDUZ<br/>CLIN{:/}
 Lines | ```{::nomarkdown} N GSEQ,GCNT,GROUP,HDR,IFN,LCNT,ITEM,TG,GMPLSLST<br/> S TG=$NAME(TMP) ; put list in local<br/> K @TG<br/> S (GSEQ,GCNT,LCNT)=0<br/> S GMPLSLST=$$GETUSLST(DUZ,CLIN) ; get approp list for user<br/> F  S GSEQ=$O(^GMPL(125.1,"C",+GMPLSLST,GSEQ)) Q:GSEQ'>0  D<br/> . S IFN=$O(^GMPL(125.1,"C",+GMPLSLST,GSEQ,0)) Q:IFN'>0<br/> . S ITEM=$G(^GMPL(125.1,IFN,0))<br/> . S GROUP=+$P(ITEM,U,3)<br/> . S HDR=GROUP_U_$P(ITEM,U,4,5)<br/> . S GCNT=GCNT+1<br/> . S @TG@(GCNT)=HDR ; put category into temp global```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DUZ{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}USER ID{:/} | 
| {::nomarkdown}CLINIC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}IFN OF CLINIC{:/} | 




 Generated on January 13th 2017, 7:11:26 am