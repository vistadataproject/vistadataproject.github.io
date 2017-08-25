---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTIU WINPRINT NOTE<br/>
# ORWTIU WINPRINT NOTE

Returns a formatted global of a TIU document for output to a Windows printdevice.

## Properties

Property | Value
--- | ---
Label | PRINTW
MUMPS Implementation | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Note IEN | LITERAL | 20 | true | IEN of document in file 8925.
Chart Copy? | LITERAL | 2 |  | If true, print chart copy, else print work copy.



## MUMPS Method Description

Property | Value
--- | ---
Method | [PRINTW^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Method Comment | TIU print to windows printer
Input Parameters | ORDA, ORFLG
Code | {::nomarkdown}<pre><code> N ZTQUEUED,ORHFS,ORSUB,ORIO,ORSTATUS,ROOT,ORERR,ORWIN,ORHANDLE<br/> N IOM,IOSL,IOST,IOF,IOT,IOS<br/> S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS",ORWIN=1,ORHANDLE="ORWTIU"<br/> S ORY=$NA(^TMP(ORSUB,$J,1))<br/> S ORHFS=$$HFS^ORWRP()<br/> D HFSOPEN^ORWRP(ORHANDLE,ORHFS,"W")<br/> I POP D  Q<br/> . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file for TIU print")<br/> D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")<br/> N $ETRAP,$ESTACK<br/> S $ETRAP="D ERR^ORWRP Q"<br/> U IO<br/> D RPC^TIUPD(.ORERR,ORDA,ORIO,ORFLG,ORWIN)<br/> D HFSCLOSE^ORWRP(ORHANDLE,ORHFS)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}