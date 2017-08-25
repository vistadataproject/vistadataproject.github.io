---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP PRINT WINDOWS REMOTE<br/>
# ORWRP PRINT WINDOWS REMOTE

 Prints CPRS GUI information to windows printer.

## Properties

Property | Value
--- | ---
Label | PRINTWR
MUMPS Implementation | [ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [PRINTWR^ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
Method Comment | Windows Remote device print
Input Parameters | ORDFN, ORRPTID, ORHANDS
Code | {::nomarkdown}<pre><code> N ZTQUEUED,ORHFS,ORSUB,ROOT,ORIO,ORHANDLE,ORWINDEV<br/> N IOM,IOSL,IOST,IOF,IOT,IOS,ORHSTAG,POP<br/> S ORHSTAG=$P($G(ORRPTID),"~",2),ORRPTID=$P($G(ORRPTID),"~"),ORRPTID=$P($P(ORRPTID,";"),":")<br/> S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS",ORTEXT=$NA(^TMP(ORSUB,$J,1)),ORHANDLE="ORWRP"<br/> S ORHFS=$$HFS^ORWRP(),ORWINDEV=1 ;Flag for printing to windows device<br/> D HFSOPEN^ORWRP(ORHANDLE,ORHFS,"W")<br/> I POP D  Q<br/> . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file")<br/> D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")<br/> N $ETRAP,$ESTACK<br/> S $ETRAP="D ERR^ORWRP Q"<br/> U IO<br/> D DEQUE<br/> D HFSCLOSE^ORWRP(ORHANDLE,ORHFS)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}