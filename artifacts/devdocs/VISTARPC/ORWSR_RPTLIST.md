---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWSR RPTLIST<br/>
# ORWSR RPTLIST



## Properties

Property | Value
--- | ---
Label | RPTLIST
MUMPS Implementation | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [RPTLIST^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Method Comment | Return list of surgery reports for reports tab
Input Parameters | ORDFN
First Comment | {::nomarkdown}<pre><code>I '$$PATCH^XPDUTL("SR*3.0*100") D NOTYET(.ORY)  Q</code></pre>{:/}
Code | {::nomarkdown}<pre><code> Q:'$$PATCH^XPDUTL("SR*3.0*100")<br/> Q:'+ORDFN<br/> N ORBDT,OREDT,ORMAX,I,SHOWDOCS,X,SITE,Z,SPEC,GMN,STATUS,DCTDTM,TRSDTM,Y,ORLW<br/> S (ORBDT,OREDT,ORMAX)="",SHOWDOCS=0<br/> S ORY=$NA(^TMP("ORLIST",$J))<br/> S SITE=$$SITE^VASITE,SITE=$P(SITE,"^",2)_";"_$P(SITE,"^",3)<br/> D LIST^SROESTV(.ORY,ORDFN,ORBDT,OREDT,ORMAX,SHOWDOCS)<br/> S I=0<br/> F  S I=$O(@ORY@(I)) Q:+I=0  D<br/> . S X=$P(@ORY@(I),U,2),$P(@ORY@(I),U,2)=$P(@ORY@(I),U,3),$P(@ORY@(I),U,3)=X<br/> . S $P(@ORY@(I),U,4)=$P($P(@ORY@(I),U,4),";",2)<br/> . S GMN=$P(@ORY@(I),U)<br/> . ;*347 Use Fileman calls.<br/> . K ORLW D GETS^DIQ(130,GMN,"49","","ORLW") S Z=$Q(ORLW) S:Z']"" Z="Z" S $P(@ORY@(I),U,6)="LAB WORK-"_$S($D(@Z)>1:"Yes",1:"No") ; Lab work<br/> . D STATUS^GMTSROB S:'$D(STATUS) STATUS="UNKNOWN"<br/> . S $P(@ORY@(I),U,7)="STATUS-"_STATUS ; op status<br/> . S Z=$$GET1^DIQ(130,GMN,.04,"I") I Z>0 S Y=Z,C=$P(^DD(130,.04,0),U,2) D Y^DIQ S SPEC=Y K Y<br/> . S $P(@ORY@(I),U,8)="SPEC-"_$G(SPEC) ; Surgical specialty<br/> . S Z=$$GET1^DIQ(130,GMN,15,"I") S:Z>0 DCTDTM=$$DATE^ORDVU(Z)<br/> . S $P(@ORY@(I),U,9)="DICT-"_$G(DCTDTM) ; Dictation Time<br/> . S Z=$$GET1^DIQ(130,GMN,39,"I") S:Z>0 TRSDTM=$$DATE^ORDVU(Z)<br/> . S $P(@ORY@(I),U,10)="TRANS-"_$G(TRSDTM) ; Transcription Time<br/> . ;*347 Reset variables for each item.<br/> . K SPEC,DCTDTM,TRSDTM,STATUS,Y,Z<br/> . S @ORY@(I)=SITE_U_@ORY@(I)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}