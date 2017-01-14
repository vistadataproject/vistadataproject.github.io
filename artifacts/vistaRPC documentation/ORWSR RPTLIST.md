---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWSR RPTLIST 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWSR RPTLIST{:/}
 tag | {::nomarkdown}RPTLIST{:/}
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | RPTLIST^[ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 Method comment | Return list of surgery reports for reports tab
 First comment | {::nomarkdown}I '$$PATCH^XPDUTL("SR*3.0*100") D NOTYET(.ORY)  Q{:/}
 Input parameters | {::nomarkdown}ORDFN{:/}
 Code | ```  Q:'$$PATCH^XPDUTL("SR*3.0*100")<br/> Q:'+ORDFN<br/> N ORBDT,OREDT,ORMAX,I,SHOWDOCS,X,SITE,Z,SPEC,GMN,STATUS,DCTDTM,TRSDTM,Y,ORLW<br/> S (ORBDT,OREDT,ORMAX)="",SHOWDOCS=0<br/> S ORY=$NA(^TMP("ORLIST",$J))<br/> S SITE=$$SITE^VASITE,SITE=$P(SITE,"^",2)_";"_$P(SITE,"^",3)<br/> D LIST^SROESTV(.ORY,ORDFN,ORBDT,OREDT,ORMAX,SHOWDOCS)<br/> S I=0<br/> F  S I=$O(@ORY@(I)) Q:+I=0  D<br/> . S X=$P(@ORY@(I),U,2),$P(@ORY@(I),U,2)=$P(@ORY@(I),U,3),$P(@ORY@(I),U,3)=X<br/> . S $P(@ORY@(I),U,4)=$P($P(@ORY@(I),U,4),";",2)<br/> . S GMN=$P(@ORY@(I),U)<br/> . ;*347 Use Fileman calls.<br/> . K ORLW D GETS^DIQ(130,GMN,"49","","ORLW") S Z=$Q(ORLW) S:Z']"" Z="Z" S $P(@ORY@(I),U,6)="LAB WORK-"_$S($D(@Z)>1:"Yes",1:"No") ; Lab work<br/> . D STATUS^GMTSROB S:'$D(STATUS) STATUS="UNKNOWN"<br/> . S $P(@ORY@(I),U,7)="STATUS-"_STATUS ; op status<br/> . S Z=$$GET1^DIQ(130,GMN,.04,"I") I Z>0 S Y=Z,C=$P(^DD(130,.04,0),U,2) D Y^DIQ S SPEC=Y K Y<br/> . S $P(@ORY@(I),U,8)="SPEC-"_$G(SPEC) ; Surgical specialty<br/> . S Z=$$GET1^DIQ(130,GMN,15,"I") S:Z>0 DCTDTM=$$DATE^ORDVU(Z)<br/> . S $P(@ORY@(I),U,9)="DICT-"_$G(DCTDTM) ; Dictation Time<br/> . S Z=$$GET1^DIQ(130,GMN,39,"I") S:Z>0 TRSDTM=$$DATE^ORDVU(Z)<br/> . S $P(@ORY@(I),U,10)="TRANS-"_$G(TRSDTM) ; Transcription Time<br/> . ;*347 Reset variables for each item.<br/> . K SPEC,DCTDTM,TRSDTM,STATUS,Y,Z<br/> . S @ORY@(I)=SITE_U_@ORY@(I)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}