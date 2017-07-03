---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPL USER PROB CATS
# ORQQPL USER PROB CATS

rETURNS ARRAY OF CATEGORIES FOR USER TO SELECT FROM

Property | Value
--- | ---
Label | CAT
Routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DUZ | LITERAL |  |  | USER ID
CLINIC | LITERAL |  |  | IFN OF CLINIC



### MUMPS Method Description

Property | Value
--- | ---
Method | [CAT^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
Method Comment | Get user category list
Input Parameters | ORDUZ, CLIN
Code | {::nomarkdown}<pre><code> N GSEQ,GCNT,GROUP,HDR,IFN,LCNT,ITEM,TG,GMPLSLST<br/> S TG=$NAME(TMP) ; put list in local<br/> K @TG<br/> S (GSEQ,GCNT,LCNT)=0<br/> S GMPLSLST=$$GETUSLST(DUZ,CLIN) ; get approp list for user<br/> F  S GSEQ=$O(^GMPL(125.1,"C",+GMPLSLST,GSEQ)) Q:GSEQ'>0  D<br/> . S IFN=$O(^GMPL(125.1,"C",+GMPLSLST,GSEQ,0)) Q:IFN'>0<br/> . S ITEM=$G(^GMPL(125.1,IFN,0))<br/> . S GROUP=+$P(ITEM,U,3)<br/> . S HDR=GROUP_U_$P(ITEM,U,4,5)<br/> . S GCNT=GCNT+1<br/> . S @TG@(GCNT)=HDR ; put category into temp global</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}