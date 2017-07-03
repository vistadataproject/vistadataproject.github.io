---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXA COMPLETE
# ORWDXA COMPLETE

Complete an order.

Property | Value
--- | ---
Label | COMPLETE
Routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [COMPLETE^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Method Comment | Complete order (generic)
Input Parameters | ORID, ESCODE
First Comment | {::nomarkdown}<pre><code>N X S X=+$E($$NOW^XLFDT,1,12)<br/>D DATES^ORCSAVE2(+ORID,,X)<br/>D STATUS^ORCSAVE2(+ORID,2)<br/> validate ESCode</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D COMP^ORCSAVE2(ORID)<br/> D COMP^ORMBLDOR(ORID)<br/> D GETBYIFN^ORWORR(.REC,ORID)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}