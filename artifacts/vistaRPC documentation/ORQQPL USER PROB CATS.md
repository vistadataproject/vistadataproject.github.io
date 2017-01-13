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
 Lines | ```
 N GSEQ,GCNT,GROUP,HDR,IFN,LCNT,ITEM,TG,GMPLSLST
 S TG=$NAME(TMP) ; put list in local
 K @TG
 S (GSEQ,GCNT,LCNT)=0
 S GMPLSLST=$$GETUSLST(DUZ,CLIN) ; get approp list for user
 F  S GSEQ=$O(^GMPL(125.1,"C",+GMPLSLST,GSEQ)) Q:GSEQ'>0  D
 . S IFN=$O(^GMPL(125.1,"C",+GMPLSLST,GSEQ,0)) Q:IFN'>0
 . S ITEM=$G(^GMPL(125.1,IFN,0))
 . S GROUP=+$P(ITEM,U,3)
 . S HDR=GROUP_U_$P(ITEM,U,4,5)
 . S GCNT=GCNT+1
 . S @TG@(GCNT)=HDR ; put category into temp global```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DUZ{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}USER ID{:/} | 
| {::nomarkdown}CLINIC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}IFN OF CLINIC{:/} | 




 Generated on January 13th 2017, 6:55:28 am