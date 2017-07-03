---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWORB SETSORT
# ORWORB SETSORT

Sets the GUI alert sort method for the user.  This is set when a user clicks on the GUI alert columns to change the display sorting.

Property | Value
--- | ---
Label | SETSORT
Routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [SETSORT^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Method Comment | set notification sort method^direction for user
Input Parameters | SORT, DIR
Code | {::nomarkdown}<pre><code> D EN^XPAR(DUZ_";VA(200,","ORB SORT METHOD",1,SORT,.ORERR)<br/> I $L($G(DIR)) D EN^XPAR(DUZ_";VA(200,","ORB SORT DIRECTION",1,DIR,.ORERR)<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}