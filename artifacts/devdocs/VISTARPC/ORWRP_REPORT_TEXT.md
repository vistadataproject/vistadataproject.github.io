---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP REPORT TEXT<br/>
# ORWRP REPORT TEXT

This rpc retrieves the report text for a report selected onthe Report tab.the report format on the roll 'n scroll version of CPRS.

## Properties

Property | Value
--- | ---
Label | RPT
MUMPS Implementation | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Internal entry number of entry in the Patient file.
REPORT ID | LITERAL | 20 | true | Identification number of the desired report.
HEALTH SUMMARY TYPE | LITERAL | 20 | true | Internal entry number of entry in the HEALTH SUMMARY TYPE file.This parameter is only required for Health Summary reports.
DATE RANGE | LITERAL | 5 | true | This parameter indicates the number of days from TODAYthat the report should search for information.This parameter is required for vital reports.
REPORT SECTION | LITERAL | 2 | true | This parameter specifics which portion of the report should beretrieved.If REPORT SECTION equals 0 then the entire report is re-compiled and thefirst section is passed back. If the report is large then it isnecessary to divide it into sections. Currently, each section cannot be more than be more than 20,000 characters



## MUMPS Method Description

Property | Value
--- | ---
Method | [RPT^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
Method Comment | return report text
Input Parameters | DFN, RPTID, HSTYPE, DTRANGE, EXAMID, ALPHA, OMEGA
First Comment | {::nomarkdown}<pre><code>ROOT=Output in ^TMP("ORDATA",$J)<br/>DFN=Patient DFN ; ICN for remote sites<br/>RPTID=Unique report ID_";"_Remote ID_"~"_HSComponent for listview (ent;rtn;0;MaxOcc) or text (ent;rtn;#component;MaxOcc)<br/>HSTYPE=Health Sum Type<br/>DTRANGE=# days back from today<br/>EXAMID=Rad exam ID<br/>ALPHA=Start date<br/>OMEGA=End date<br/>  RPC: ORWRP REPORT TEXT<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N X,X0,X2,X4,I,J,ENT,RTN,ID,REMOTE,GO,OUT,MAX,SITE,ORFHIE,%ZIS,HSTAG,DIRECT,TAB<br/> K ^TMP("ORDATA",$J)<br/> S TAB="R"<br/> I $E(RPTID,1,2)="L:" S TAB="L",RPTID=$P(RPTID,":",2,999) ;an ID beginning with "L:" forces TAB to LAB - "L:" added in GUI code<br/> S HSTAG=$P($G(RPTID),"~",2),RPTID=$P($G(RPTID),"~"),ROOT=$NA(^TMP("ORDATA",$J,1)),REMOTE=+$P(RPTID,";",2),RPTID=$P($P(RPTID,";"),":")<br/> I 'REMOTE S DFN=+DFN ;DFN = DFN;ICN for remote calls<br/> S I=0,X0="",X2="",X4="",SITE=$$SITE^VASITE,SITE=$P(SITE,"^",2)_";"_$P(SITE,"^",3)<br/> F  S I=$O(^ORD(101.24,"AC",I)) Q:I=""  S J=0 F  S J=$O(^ORD(101.24,"AC",I,J)) Q:'J  D<br/> . I $P($G(^ORD(101.24,J,0)),"^",2)=RPTID,$P(^(0),"^",8)=TAB S X0=^(0),X2=$G(^(2)),ORFHIE=$G(^(4)),DIRECT=$P(ORFHIE,"^",4),X4=$P(ORFHIE,"^",2),ORFHIE=$P(ORFHIE,"^",3)<br/> I '$L(X0) D NOTYET(.ROOT) Q<br/> S RTN=$P(X0,"^",5),ENT=$P(X0,"^",6)<br/> I '$L(RTN)!'$L(ENT) D NOTYET(.ROOT) Q<br/> I '$L($T(@(ENT_"^"_RTN))) D NOTYET(.ROOT) Q<br/> I $G(ALPHA) D<br/> . N X1,X2<br/> . S X=ALPHA<br/> . S X1=ALPHA,X2=$G(OMEGA) D:X2 ^%DTC ;X returned, # of days diff<br/> . I X<0 S X=X*(-1)<br/> . I X4,X>X4 S:ALPHA>OMEGA OMEGA=$$FMADD^XLFDT(ALPHA,-X4) S:ALPHA'>OMEGA ALPHA=$$FMADD^XLFDT(OMEGA,-X4) S DTRANGE=""<br/> I X4,$G(DTRANGE)>X4 S DTRANGE=X4,ALPHA=""<br/> I $L($G(DTRANGE)),'$G(ALPHA) S ALPHA=$$FMADD^XLFDT(DT,-DTRANGE),OMEGA=DT_".235959"<br/> I $G(OMEGA),$E(OMEGA,8)'="." S OMEGA=OMEGA_".235959"<br/> S ID=$G(HSTAG),$P(ID,";",5,10)=SITE_";"_$P(X2,"^",8)_";"_$P(X2,"^",9)_";"_RPTID_";"_$G(DIRECT) ;HDRHX CHANGE<br/> I $L($P($G(HSTAG),";",4)) S MAX=$P(HSTAG,";",4)<br/> I $L($G(HSTYPE)) M ID=HSTYPE<br/> I $L($G(EXAMID)) M ID=EXAMID<br/> S OUT=ENT_"^"_RTN_"(.ROOT,DFN,.ID,.ALPHA,.OMEGA,.DTRANGE,.REMOTE,.MAX,.ORFHIE)"<br/> I REMOTE S GO=0 D  Q:'GO<br/> . I '$L($T(GETDFN^MPIF001)) D SETITEM(.ROOT,"MPI routines missing on remote system ("_SITE_")") S GO=0 Q<br/> . S ICN=+$P(DFN,";",2),DFN=+$$GETDFN^MPIF001(ICN)<br/> . I DFN<0 D SETITEM(.ROOT,"Patient not found on remote system ("_SITE_")") S GO=0 Q<br/> . S GO=+$P(X0,"^",3)<br/> . I 'GO D SETITEM(.ROOT,"Remote access not available for this report ("_SITE_")")<br/> S %ZIS="0N"<br/> D @OUT</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fLabs.pas">fLabs.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fReports.pas">fReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}