---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDFH QTY2CC<br/>
# ORWDFH QTY2CC

Returns cc's given a product, strength, and quantity.

## Properties

Property | Value
--- | ---
Label | QTY2CC
MUMPS Implementation | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [QTY2CC^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Method Comment | Return cc&#x27;s given a product, strength, &amp; quantity
Input Parameters | PRD, STR, QTY
Code | {::nomarkdown}<pre><code> N X,VQTY,DUR<br/> S VQTY=$$VALIDQTY^ORCDFHTF(QTY) I '$L(VQTY)!('PRD)!('STR) S VAL="" Q<br/> S PRD=+$P($G(^ORD(101.43,PRD,0)),U,2)<br/> S DUR=$P(VQTY," X ",2) I $L(DUR) S DUR=$S(DUR["H":"H",1:"X")_+DUR<br/> S X=+VQTY_"&"_$E($P(VQTY," ",2))_U_$P($P(VQTY,"/",2)," ")_U_DUR<br/> S VAL=$$QUAN^FHWOR5R(PRD_"-"_STR,X)_U_VQTY</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}