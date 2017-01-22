---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; RORHEPC PATIENT SAVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}RORHEPC PATIENT SAVE{:/}
 tag | {::nomarkdown}SAVE{:/}
 routine | [RORRP037](http://code.osehra.org/dox/Routine_RORRP037_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The RORHEPC PATIENT SAVE remote procedure updates the patient's record inthe registry (or creates one).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).{:/} | 
| {::nomarkdown}PATIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}A valid patient IEN (DFN) should be assigned to the PATIEN parameter.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}A list that contains the data in the same format as the output of theRORHEPC PATIENT LOAD remote procedure. Only HEPC segment is processed; theothers are ignored. Example:   with RPCBroker do    begin      RemoteProcedure:= 'RORHEPC PATIENT LOAD';      Param[0].Value := RegistryIEN;      Param[0].PType := literal;      Param[1].Value := DFN;      Param[1].PType := literal;      lstCall(PatientData);     // Load the data       ...                       // Edit the data       RemoteProcedure:= 'RORHEPC PATIENT SAVE';      Param[0].Value := RegistryIEN;      Param[0].PType := literal;      Param[1].Value := DFN;      Param[1].PType := literal;      Param[2].PType := list;      Param[2].Mult.Assign(PatientData);      Call;                     // Save the data   end; NOTE: Only those items of the list are processed      that have numeric subscripts greater than 0;      all others are ignored.{:/} | 
| {::nomarkdown}CANCEL{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Cancel the update and unlock the patient's registry data.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}