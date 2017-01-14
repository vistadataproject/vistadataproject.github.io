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
 Code | ```  Q:'$$PATCH^XPDUTL("SR*3.0*100")
 Q:'+ORDFN
 N ORBDT,OREDT,ORMAX,I,SHOWDOCS,X,SITE,Z,SPEC,GMN,STATUS,DCTDTM,TRSDTM,Y,ORLW
 S (ORBDT,OREDT,ORMAX)="",SHOWDOCS=0
 S ORY=$NA(^TMP("ORLIST",$J))
 S SITE=$$SITE^VASITE,SITE=$P(SITE,"^",2)_";"_$P(SITE,"^",3)
 D LIST^SROESTV(.ORY,ORDFN,ORBDT,OREDT,ORMAX,SHOWDOCS)
 S I=0
 F  S I=$O(@ORY@(I)) Q:+I=0  D
 . S X=$P(@ORY@(I),U,2),$P(@ORY@(I),U,2)=$P(@ORY@(I),U,3),$P(@ORY@(I),U,3)=X
 . S $P(@ORY@(I),U,4)=$P($P(@ORY@(I),U,4),";",2)
 . S GMN=$P(@ORY@(I),U)
 . ;*347 Use Fileman calls.
 . K ORLW D GETS^DIQ(130,GMN,"49","","ORLW") S Z=$Q(ORLW) S:Z']"" Z="Z" S $P(@ORY@(I),U,6)="LAB WORK-"_$S($D(@Z)>1:"Yes",1:"No") ; Lab work
 . D STATUS^GMTSROB S:'$D(STATUS) STATUS="UNKNOWN"
 . S $P(@ORY@(I),U,7)="STATUS-"_STATUS ; op status
 . S Z=$$GET1^DIQ(130,GMN,.04,"I") I Z>0 S Y=Z,C=$P(^DD(130,.04,0),U,2) D Y^DIQ S SPEC=Y K Y
 . S $P(@ORY@(I),U,8)="SPEC-"_$G(SPEC) ; Surgical specialty
 . S Z=$$GET1^DIQ(130,GMN,15,"I") S:Z>0 DCTDTM=$$DATE^ORDVU(Z)
 . S $P(@ORY@(I),U,9)="DICT-"_$G(DCTDTM) ; Dictation Time
 . S Z=$$GET1^DIQ(130,GMN,39,"I") S:Z>0 TRSDTM=$$DATE^ORDVU(Z)
 . S $P(@ORY@(I),U,10)="TRANS-"_$G(TRSDTM) ; Transcription Time
 . ;*347 Reset variables for each item.
 . K SPEC,DCTDTM,TRSDTM,STATUS,Y,Z
 . S @ORY@(I)=SITE_U_@ORY@(I)```




 Generated on January 14th 2017, 7:26:35 am