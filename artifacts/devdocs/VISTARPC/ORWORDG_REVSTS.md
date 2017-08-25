---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWORDG REVSTS<br/>
# ORWORDG REVSTS

Returns the status flags available for review orders action.

## Properties

Property | Value
--- | ---
Label | REVSTS
MUMPS Implementation | [ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [REVSTS^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
Method Comment | Return the status flags available for review orders
First Comment | {::nomarkdown}<pre><code>N I,X,T S ILST=0<br/>F I=1:1 S T="ORDSTS+"_I_"^ORCHANG2" S X=$T(@T) Q:$P(X,";",4)="ZZZZ"  D<br/>. S ILST=ILST+1,LST(ILST)=$P(X,";",3)_U_$P(X,";",4)</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D STSLST^ORCHANG2(.LST)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}