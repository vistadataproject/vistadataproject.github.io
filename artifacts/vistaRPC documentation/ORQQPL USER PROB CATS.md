---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL USER PROB CATS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL USER PROB CATS{:/}
 tag | {::nomarkdown}CAT{:/}
 routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}rETURNS ARRAY OF CATEGORIES FOR USER TO SELECT FROM{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DUZ{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}USER ID{:/} | 
| {::nomarkdown}CLINIC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}IFN OF CLINIC{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CAT^[ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 Method comment | Get user category list
 Input parameters | {::nomarkdown}ORDUZ<br>CLIN{:/}
 Code | {::nomarkdown}  N GSEQ,GCNT,GROUP,HDR,IFN,LCNT,ITEM,TG,GMPLSLST<br> S TG=$NAME(TMP) ; put list in local<br> K @TG<br> S (GSEQ,GCNT,LCNT)=0<br> S GMPLSLST=$$GETUSLST(DUZ,CLIN) ; get approp list for user<br> F  S GSEQ=$O(^GMPL(125.1,"C",+GMPLSLST,GSEQ)) Q:GSEQ'>0  D<br> . S IFN=$O(^GMPL(125.1,"C",+GMPLSLST,GSEQ,0)) Q:IFN'>0<br> . S ITEM=$G(^GMPL(125.1,IFN,0))<br> . S GROUP=+$P(ITEM,U,3)<br> . S HDR=GROUP_U_$P(ITEM,U,4,5)<br> . S GCNT=GCNT+1<br> . S @TG@(GCNT)=HDR ; put category into temp global{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [rProbs.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:06 am</p>{:/}