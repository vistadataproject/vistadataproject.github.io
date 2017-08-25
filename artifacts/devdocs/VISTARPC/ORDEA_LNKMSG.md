---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORDEA LNKMSG<br/>
# ORDEA LNKMSG

Returns the text of the OR DEA PIV LINK MSG parameter.

## Properties

Property | Value
--- | ---
Label | LNKMSG
MUMPS Implementation | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
Return Type | WORD PROCESSING




## MUMPS Method Description

Property | Value
--- | ---
Method | [LNKMSG^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
Method Comment | message to display after successful PIV link for admin contact person
Code | {::nomarkdown}<pre><code> N I,ORTY<br/> D GETWP^XPAR(.ORTY,"DIV^SYS^PKG","OR DEA PIV LINK MSG")<br/> S I=0 F  S I=$O(ORTY(I)) Q:'I  S ORY(I)=ORTY(I,0)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/uOrders.pas">Orders/uOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}