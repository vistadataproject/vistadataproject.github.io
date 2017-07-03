---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWOR1 SETDTEXT
# ORWOR1 SETDTEXT

Sets/updates the external text of an order.The updated text is also returned.

Property | Value
--- | ---
Label | SETDTEXT
Routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [SETDTEXT^ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
Method Comment | Set Digital Text data into file 100 &amp; return the array
Input Parameters | ORDER, ORDEA, ORSIGNER
First Comment | {::nomarkdown}<pre><code>ORDER = ORIFN;ACTION<br/>ORDEA = Schedule of Drug (2-5)<br/>ORSIGNER = DUZ of signer</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORSET,IFN,ACT,I<br/> S Y="-1^Digital Text failed to build",IFN=+ORDER,ACT=$P(ORDER,";",2)<br/> I '$G(ORDEA) Q<br/> I '$G(ORSIGNER) S ORSIGNER=DUZ<br/> D DIGTEXT^ORCSAVE1(IFN,ORDEA,ORSIGNER)<br/> S Y=0<br/> I '$G(ORSET) Q<br/> K ^OR(100,IFN,8,ACT,.2)<br/> F I=1:1:ORSET S (Y(I),^OR(100,IFN,8,ACT,.2,I,0))=ORSET(I)<br/> S ^OR(100,IFN,8,ACT,.2,0)="^^"_ORSET_"^"_ORSET_"^"_DT_"^",Y=ORSET</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}