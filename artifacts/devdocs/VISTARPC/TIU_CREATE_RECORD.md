---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU CREATE RECORD<br/>
# TIU CREATE RECORD

This remote procedure allows the creation of TIU DOCUMENT records.

## Properties

Property | Value
--- | ---
Label | MAKE
MUMPS Implementation | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | This REQUIRED PARAMETER is the pointer to the patient file.
TITLE | LITERAL |  | true | This is the pointer to the TIU DOCUMENT DEFINITION FILE which identifiesthe TITLE of the document to be filed.
VDT | LITERAL |  | true | This optional parameter is the Date/time of visit.  If the parameter VSITis present, this will be ignored.  Otherwise, the RPC will attempt togenerate a match with a visit based on DFN, VDT, and VLOC (visitlocation).  In the event that the RPC cannot generate such a match, a newEVENT-type Visit will be created with the current date/time.
VLOC | LITERAL |  | true | This optional parameter is the Location of Visit (e.g., CardiologyClinic).  It is a pointer to Hospital location (File #44).
VSIT | LITERAL |  | true | This is a pointer to the Visit File (#9000010) entry for the visit towhich the document is to be linked.
TIUX | LIST |  | true | This is the input array in which the identifiers of the document, as wellas its text, are to be stored in the format described for the TIU UPDATERECORD RPC.
VSTR | LITERAL |  | true | This parameter identifies the visit location, date/time, and ServiceCategory (Hospitalization, Ambulatory, Telecommunications, or Event(HISTORICAL)) in the form of a semi-colon delimited string (e.g.,&quot;469;2970616.1415;A&quot;).
SUPPRESS | LITERAL | 1 | true | BOOLEAN flag indicating whether or not to suppress execution of the COMMITACTION for the document in question. This gives the calling applicationcontrol over the circumstances in which the COMMIT CODE should beexecuted.
NOASF | LITERAL | 1 | true | This parameter can optionally be set to 1 to indicate the ASAVE cross-reference in the TIU Document file (#8925) should not be set when calling this RPC.  The intent of this cross-reference is for telnet type sessions where a user could be dropped.  The cross-reference is used to provide the user with an easy way to resume editing the TIU Document they were working on when they were dropped.  In the Clinical Procedures realm, for example, where the stub is created in the &#x27;background&#x27; thiscross-reference should not be set since the user is not interactivelyinvolved in the creation of the record.



## MUMPS Method Description

Property | Value
--- | ---
Method | [MAKE^TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
Method Comment | New Document
Input Parameters | DFN, TITLE, VDT, VLOC, VSIT, TIUX, VSTR, SUPPRESS, NOASF
First Comment | {::nomarkdown}<pre><code> SUCCESS = (by ref) TIU DOCUMENT # (PTR to 8925)<br/>         = 0^Explanatory message if no SUCCESS<br/> DFN     = Patient (#2)<br/> TITLE   = TIU Document Definition (#8925.1)<br/> [VDT]   = Date(/Time) of Visit<br/> [VLOC]  = Visit Location (HOSPITAL LOCATION)<br/> [VSIT]  = Visit file ien (#9000010)<br/> [VSTR]  = Visit string (i.e., VLOC;VDT;VTYPE)<br/> [NOASF] = if 1=Do Not Set ASAVE cross-reference<br/> TIUX    = (by ref) array containing field data and document body<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIU,TIUDA,LDT,NEWREC<br/> S SUCCESS=0<br/> I +$G(VSIT) S VSTR=$$VSTRBLD(+VSIT)<br/> I $L($G(VSTR)) D<br/> . S VDT=$S(+$G(VDT):+$G(VDT),1:$P(VSTR,";",2))<br/> . S LDT=$S(+$G(VDT):$$FMADD^XLFDT(VDT,"","",1),1:"")<br/> . S VLOC=$S(+$G(VLOC):+$G(VLOC),1:$P(VSTR,";"))<br/> . ; If note is for Ward Location, call MAIN^TIUMOVE<br/> . I $P($G(^SC(+VLOC,0)),U,3)="W" D MAIN^TIUMOVE(.TIU,DFN,"",VDT,LDT,1,"LAST",0,+VLOC) Q<br/> . ; Otherwise, call PATVADPT^TIULV<br/> . D PATVADPT^TIULV(.TIU,DFN,"",VSTR)<br/> I '+$G(VSIT),'$L($G(VSTR)),+$G(VDT),+$G(VLOC) D<br/> . S VDT=$G(VDT),LDT=$S(+$G(VDT):$$FMADD^XLFDT(VDT,"","",1),1:"")<br/> . ; If note is for Ward Location, call MAIN^TIUMOVE<br/> . I $P($G(^SC(+VLOC,0)),U,3)="W" D MAIN^TIUMOVE(.TIU,DFN,"",VDT,LDT,1,"LAST",0,+VLOC) Q<br/> . ; Otherwise, call MAIN^TIUVSIT<br/> . D MAIN^TIUVSIT(.TIU,DFN,"",VDT,LDT,"LAST",0,VLOC)<br/> I '+$G(TIU("VSTR")) D<br/> . D EVENT^TIUSRVP1(.TIU,DFN)<br/> S TIU("INST")=$$DIVISION^TIULC1(+TIU("LOC"))<br/> I $S($D(TIU)'>9:1,+$G(DFN)'>0:1,1:0) S SUCCESS="0^"_$$EZBLD^DIALOG(89250001) Q<br/> S TIUDA=$$GETREC(DFN,.TIU,TITLE,.NEWREC)<br/> I +TIUDA'>0 S SUCCESS="0^"_$$EZBLD^DIALOG(89250002) Q<br/> S SUCCESS=+TIUDA<br/> D STUFREC^TIUSRVP1(+TIUDA,.TIUX,DFN,,TITLE,.TIU)<br/> S:'+$G(NOASF) ^TIU(8925,"ASAVE",DUZ,TIUDA)=""<br/> K ^TIU(8925,+TIUDA,"TEMP")<br/> M ^TIU(8925,+TIUDA,"TEMP")=TIUX("TEXT") K TIUX("TEXT")<br/> D SETXT0(TIUDA)<br/> D FILE(.SUCCESS,+TIUDA,.TIUX,+$G(SUPPRESS))<br/> I +SUCCESS'>0 D DIK^TIURB2(TIUDA) Q<br/> I +$O(^TIU(8925,+TIUDA,"TEMP",0)) D MERGTEXT^TIUEDI1(+TIUDA,.TIU)<br/> I +$G(TIU("STOP")) D DEFER^TIUVSIT(TIUDA,TIU("STOP")) I 1<br/> E  D QUE^TIUPXAP1<br/> I '+$G(SUPPRESS) D<br/> . D RELEASE^TIUT(TIUDA,1)<br/> . D UPDTIRT^TIUDIRT(.TIU,TIUDA)<br/> K ^TIU(8925,+TIUDA,"TEMP")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}