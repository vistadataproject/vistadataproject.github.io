---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RORHEPC PATIENT SAVE 

 property | value 
--- | --- 
 label | RORHEPC PATIENT SAVE
 tag | SAVE
 routine | [RORRP037](http://code.osehra.org/dox/Routine_RORRP037_source.html)
 return value type | ARRAY
 description | The RORHEPC PATIENT SAVE remote procedure updates the patient's record inthe registry (or creates one).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| vs:Input_Parameter-8994_02 | PATIEN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the PATIEN parameter. | 
| vs:Input_Parameter-8994_02 | DATA | LIST |  | true | A list that contains the data in the same format as the output of theRORHEPC PATIENT LOAD remote procedure. Only HEPC segment is processed; theothers are ignored. Example:   with RPCBroker do    begin      RemoteProcedure:= 'RORHEPC PATIENT LOAD';      Param[0].Value := RegistryIEN;      Param[0].PType := literal;      Param[1].Value := DFN;      Param[1].PType := literal;      lstCall(PatientData);     // Load the data       ...                       // Edit the data       RemoteProcedure:= 'RORHEPC PATIENT SAVE';      Param[0].Value := RegistryIEN;      Param[0].PType := literal;      Param[1].Value := DFN;      Param[1].PType := literal;      Param[2].PType := list;      Param[2].Mult.Assign(PatientData);      Call;                     // Save the data   end; NOTE: Only those items of the list are processed      that have numeric subscripts greater than 0;      all others are ignored. | 
| vs:Input_Parameter-8994_02 | CANCEL | LITERAL |  |  | Cancel the update and unlock the patient's registry data. | 