---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP REPORT TEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP REPORT TEXT{:/}
 tag | {::nomarkdown}RPT{:/}
 routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This rpc retrieves the report text for a report selected onthe Report tab.the report format on the roll 'n scroll version of CPRS.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return report text
 Input Parameters | {::nomarkdown}DFN<br/>RPTID<br/>HSTYPE<br/>DTRANGE<br/>EXAMID<br/>ALPHA<br/>OMEGA{:/}
 Lines | {::nomarkdown} N X,X0,X2,X4,I,J,ENT,RTN,ID,REMOTE,GO,OUT,MAX,SITE,ORFHIE,%ZIS,HSTAG,DIRECT,TAB<br/> K ^TMP("ORDATA",$J)<br/> S TAB="R"<br/> I $E(RPTID,1,2)="L:" S TAB="L",RPTID=$P(RPTID,":",2,999) ;an ID beginning with "L:" forces TAB to LAB - "L:" added in GUI code<br/> S HSTAG=$P($G(RPTID),"~",2),RPTID=$P($G(RPTID),"~"),ROOT=$NA(^TMP("ORDATA",$J,1)),REMOTE=+$P(RPTID,";",2),RPTID=$P($P(RPTID,";"),":")<br/> I 'REMOTE S DFN=+DFN ;DFN = DFN;ICN for remote calls<br/> S I=0,X0="",X2="",X4="",SITE=$$SITE^VASITE,SITE=$P(SITE,"^",2)_";"_$P(SITE,"^",3)<br/> F  S I=$O(^ORD(101.24,"AC",I)) Q:I=""  S J=0 F  S J=$O(^ORD(101.24,"AC",I,J)) Q:'J  D<br/> . I $P($G(^ORD(101.24,J,0)),"^",2)=RPTID,$P(^(0),"^",8)=TAB S X0=^(0),X2=$G(^(2)),ORFHIE=$G(^(4)),DIRECT=$P(ORFHIE,"^",4),X4=$P(ORFHIE,"^",2),ORFHIE=$P(ORFHIE,"^",3)<br/> I '$L(X0) D NOTYET(.ROOT) Q<br/> S RTN=$P(X0,"^",5),ENT=$P(X0,"^",6)<br/> I '$L(RTN)!'$L(ENT) D NOTYET(.ROOT) Q<br/> I '$L($T(@(ENT_"^"_RTN))) D NOTYET(.ROOT) Q<br/> I $G(ALPHA) D<br/> . N X1,X2<br/> . S X=ALPHA<br/> . S X1=ALPHA,X2=$G(OMEGA) D:X2 ^%DTC ;X returned, # of days diff<br/> . I X<0 S X=X*(-1)<br/> . I X4,X>X4 S:ALPHA>OMEGA OMEGA=$$FMADD^XLFDT(ALPHA,-X4) S:ALPHA'>OMEGA ALPHA=$$FMADD^XLFDT(OMEGA,-X4) S DTRANGE=""<br/> I X4,$G(DTRANGE)>X4 S DTRANGE=X4,ALPHA=""<br/> I $L($G(DTRANGE)),'$G(ALPHA) S ALPHA=$$FMADD^XLFDT(DT,-DTRANGE),OMEGA=DT_".235959"<br/> I $G(OMEGA),$E(OMEGA,8)'="." S OMEGA=OMEGA_".235959"<br/> S ID=$G(HSTAG),$P(ID,";",5,10)=SITE_";"_$P(X2,"^",8)_";"_$P(X2,"^",9)_";"_RPTID_";"_$G(DIRECT) ;HDRHX CHANGE<br/> I $L($P($G(HSTAG),";",4)) S MAX=$P(HSTAG,";",4)<br/> I $L($G(HSTYPE)) M ID=HSTYPE<br/> I $L($G(EXAMID)) M ID=EXAMID<br/> S OUT=ENT_"^"_RTN_"(.ROOT,DFN,.ID,.ALPHA,.OMEGA,.DTRANGE,.REMOTE,.MAX,.ORFHIE)"<br/> I REMOTE S GO=0 D  Q:'GO<br/> . I '$L($T(GETDFN^MPIF001)) D SETITEM(.ROOT,"MPI routines missing on remote system ("_SITE_")") S GO=0 Q<br/> . S ICN=+$P(DFN,";",2),DFN=+$$GETDFN^MPIF001(ICN)<br/> . I DFN<0 D SETITEM(.ROOT,"Patient not found on remote system ("_SITE_")") S GO=0 Q<br/> . S GO=+$P(X0,"^",3)<br/> . I 'GO D SETITEM(.ROOT,"Remote access not available for this report ("_SITE_")")<br/> S %ZIS="0N"<br/> D @OUT{:/}
 Leading comment lines | {::nomarkdown}ROOT=Output in ^TMP("ORDATA",$J)<br/>DFN=Patient DFN ; ICN for remote sites<br/>RPTID=Unique report ID_";"_Remote ID_"~"_HSComponent for listview (ent;rtn;0;MaxOcc) or text (ent;rtn;#component;MaxOcc)<br/>HSTYPE=Health Sum Type<br/>DTRANGE=# days back from today<br/>EXAMID=Rad exam ID<br/>ALPHA=Start date<br/>OMEGA=End date<br/>RPC: ORWRP REPORT TEXT{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of entry in the Patient file.{:/} | 
| {::nomarkdown}REPORT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Identification number of the desired report.{:/} | 
| {::nomarkdown}HEALTH SUMMARY TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of entry in the HEALTH SUMMARY TYPE file.This parameter is only required for Health Summary reports.{:/} | 
| {::nomarkdown}DATE RANGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter indicates the number of days from TODAYthat the report should search for information.This parameter is required for vital reports.{:/} | 
| {::nomarkdown}REPORT SECTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter specifics which portion of the report should beretrieved.If REPORT SECTION equals 0 then the entire report is re-compiled and thefirst section is passed back. If the report is large then it isnecessary to divide it into sections. Currently, each section cannot be more than be more than 20,000 characters{:/} | 




 Generated on January 13th 2017, 7:15:27 am