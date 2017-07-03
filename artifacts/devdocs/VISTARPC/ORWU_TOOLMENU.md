---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWU TOOLMENU
# ORWU TOOLMENU

Returns a list of items for the CPRS GUI Tools menu.

Property | Value
--- | ---
Label | TOOLMENU
Routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [TOOLMENU^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Method Comment | returns a list of items for the Tools menu
Code | {::nomarkdown}<pre><code> N ANENT<br/> S ANENT="ALL^"_$S($G(^VA(200,DUZ,5)):"^SRV.`"_+$G(^(5)),1:"")<br/> D GETLST^XPAR(.ORLST,ANENT,"ORWT TOOLS MENU","N")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMisc.pas">rMisc.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}