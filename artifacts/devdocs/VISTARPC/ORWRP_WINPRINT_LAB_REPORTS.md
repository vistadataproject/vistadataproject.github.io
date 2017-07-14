---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP WINPRINT LAB REPORTS<br/>
# ORWRP WINPRINT LAB REPORTS

Prints text from CPRS GUI to a windows printer.

## Properties

Property | Value
--- | ---
Label | PRINTW
Routine | [ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [PRINTW^ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
Method Comment | Windows device print
Input Parameters | ORDFN, RPTID, ORDAYSBK, ORTESTS, ORALPHA, OROMEGA
Code | {::nomarkdown}<pre><code> N ZTQUEUED,ORHFS,ORSUB,ROOT,ORIO<br/> N IOM,IOSL,IOST,IOF,IOT,IOS<br/> S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS"<br/> S ORTEXT=$NA(^TMP(ORSUB,$J,1))<br/> I '$$CHK() S @ORTEXT@(0)=ORY G PRINTWQ<br/> S ORHFS=$$HFS^ORWRP()<br/> D HFSOPEN^ORWRP("ORWRP",ORHFS,"W")<br/> I POP D  Q<br/> . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file")<br/> D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")<br/> N $ETRAP,$ESTACK<br/> S $ETRAP="D ERR^ORWRP Q"<br/> U IO<br/> D DEQUE<br/> D HFSCLOSE^ORWRP("ORWRP",ORHFS)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rLabs.pas">rLabs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}