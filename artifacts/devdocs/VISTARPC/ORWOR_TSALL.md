---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWOR TSALL<br/>
# ORWOR TSALL

Returns a list of valid treating specialities.

## Properties

Property | Value
--- | ---
Label | TSALL
MUMPS Implementation | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [TSALL^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Method Comment | Return list of treating specialties
Code | {::nomarkdown}<pre><code> N Y S Y=0<br/> F  S Y=$O(^DIC(45.7,Y)) Q:'Y  I $$ACTIVE^DGACT(45.7,Y) S LST(Y)=Y_U_$P(^DIC(45.7,Y,0),U)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}