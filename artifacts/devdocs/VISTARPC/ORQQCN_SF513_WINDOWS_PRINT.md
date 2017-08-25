---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQCN SF513 WINDOWS PRINT<br/>
# ORQQCN SF513 WINDOWS PRINT

Print consults Standard Form 513 to Windows device from GUI application.

## Properties

Property | Value
--- | ---
Label | WPRT513
MUMPS Implementation | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [WPRT513^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Method Comment | Print SF513 to Windows device from GUI
Input Parameters | GMRCO, GMRCCHT
Code | {::nomarkdown}<pre><code> N ZTQUEUED,ORHFS,ORSUB,ORIO,ORSTATUS,ROOT,ORHANDLE<br/> N IOM,IOSL,IOST,IOF,IOT,IOS<br/> S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS",ORHANDLE="ORQQCN2"<br/> S ORY=$NA(^TMP(ORSUB,$J,1))<br/> S ORHFS=$$HFS^ORWRP()<br/> D HFSOPEN^ORWRP(ORHANDLE,ORHFS,"W")<br/> I POP D  Q<br/> . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file for SF513 print")<br/> D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")<br/> N $ETRAP,$ESTACK<br/> S $ETRAP="D ERR^ORWRP Q"<br/> U IO<br/> D PRNT^GMRCP5A(GMRCO,0,0,GMRCCHT,0)<br/> D HFSCLOSE^ORWRP(ORHANDLE,ORHFS)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}