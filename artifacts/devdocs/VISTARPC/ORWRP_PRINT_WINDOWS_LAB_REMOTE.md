---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWRP PRINT WINDOWS LAB REMOTE
# ORWRP PRINT WINDOWS LAB REMOTE

 Prints remote CPRS GUI information to windows printer.

Property | Value
--- | ---
Label | PRINTWR
Routine | [ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
Return Type | GLOBAL ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [PRINTWR^ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
Method Comment | Windows Remote device print
Input Parameters | ORDFN, RPTID, ORHANDS
Code | {::nomarkdown}<pre><code> N ZTQUEUED,ORHFS,ORSUB,ROOT,ORIO,ORHANDLE<br/> N IOM,IOSL,IOST,IOF,IOT,IOS<br/> S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS",ORTEXT=$NA(^TMP(ORSUB,$J,1)),ORHANDLE="ORWRP"<br/> S ORHFS=$$HFS^ORWRP()<br/> D HFSOPEN^ORWRP(ORHANDLE,ORHFS,"W")<br/> I POP D  Q<br/> . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file")<br/> D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")<br/> N $ETRAP,$ESTACK<br/> S $ETRAP="D ERR^ORWRP Q"<br/> U IO<br/> D DEQUE<br/> D HFSCLOSE^ORWRP(ORHANDLE,ORHFS)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rLabs.pas">rLabs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}