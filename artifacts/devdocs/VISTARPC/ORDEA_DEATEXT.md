---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORDEA DEATEXT<br/>
# ORDEA DEATEXT

Returns the text to show on the signature dialog mandated by DEA for when a controlled substance order is selected to be signed.

## Properties

Property | Value
--- | ---
Label | DEATEXT
Routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
Return Type | WORD PROCESSING




## MUMPS Method Description

Property | Value
--- | ---
Method | [DEATEXT^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
Method Comment | returns the mandatory dea text to show when a user checks a controlled substance order to be signed on the signature dialog
Code | {::nomarkdown}<pre><code> N I,ORTY<br/> D GETWP^XPAR(.ORTY,"SYS","OR DEA TEXT")<br/> S I=0 F  S I=$O(ORTY(I)) Q:'I  S ORY(I)=ORTY(I,0)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fReview.pas">fReview.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fOrdersSign.pas">Orders/fOrdersSign.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}