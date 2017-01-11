---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RORICR PATIENT SAVE 

 property | value 
--- | --- 
 label | RORICR PATIENT SAVE
 tag | SAVE
 routine | [RORRP034](http://code.osehra.org/dox/Routine_RORRP034_source.html)
 return value type | ARRAY
 description | The RORICR PATIENT SAVE remote procedure updates the patient's record inthe registry (or creates one).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| PATIEN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the PATIEN parameter. | 
| DATA | LIST |  | true | A list that contains the data in the same format as the output of theRORICR PATIENT LOAD remote procedure. Only PH and ICR segments areprocessed; the others are ignored. Example:   with RPCBroker do    begin      RemoteProcedure:= 'RORICR PATIENT LOAD';      Param[0].Value := RegistryIEN;      Param[0].PType := literal;      Param[1].Value := DFN;      Param[1].PType := literal;      lstCall(PatientData);     // Load the data       ...                       // Edit the data       RemoteProcedure:= 'RORICR PATIENT SAVE';      Param[0].Value := RegistryIEN;      Param[0].PType := literal;      Param[1].Value := DFN;      Param[1].PType := literal;      Param[2].PType := list;      Param[2].Mult.Assign(PatientData);      Call;                     // Save the data   end; NOTE: Only those items of the list are processed      that have numeric subscripts greater than 0;      all others are ignored. | 
| CANCEL | LITERAL |  |  | Cancel the update and unlock the patient's registry data. | 




 ###### Generated on January 11th 2017, 6:39:43 am