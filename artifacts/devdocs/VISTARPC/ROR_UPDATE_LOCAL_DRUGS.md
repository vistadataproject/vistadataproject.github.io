---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR UPDATE LOCAL DRUGS<br/>
# ROR UPDATE LOCAL DRUGS

The ROR UPDATE LOCAL DRUGS remote procedure updates the list of local drugnames, which is stored in the LOCAL DRUG NAME (29) multiple of the RORREGISTRY PARAMETERS file (#798.1).

## Properties

Property | Value
--- | ---
Label | LDLUPD
MUMPS Implementation | [RORRP032](http://code.osehra.org/dox/Routine_RORRP032_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1).
LDLST | LIST |  | true | The LDLST parameter should be an array containing a list of drug IEN&#x27;s andDrug Group codes. An item of the list should have the following format:   ^01: Ignored  ^02: Ignored  ^03: IEN of the local drug (in file #50)  ^04: Code of the Drug Group       (see also the GROUP parameter)  Example:  with RPCBroker.Param[1] do    begin      PType :&#x3D;list;      for i :&#x3D; 1 to Drugs.Count do        Mult[i] :&#x3D; &#x27;^^&#x27; + Drugs[i-1].DrugIEN + &#x27;^&#x27; + Drugs[i-1].GroupCode;    end;
GROUP | LITERAL |  | true | If the GROUP parameter is equal to 0 then every item of the LDLST must contain a valid group code. If ane mpty list is passed into the RPC then ALL records will be deleted from the LOCAL DRUG NAME multiple. If this parameter is not zero then it should contain a valid group code.All records of the LDLST will be associated with this group. If an emptylist is passed into the RPC then only records associated with this groupwill be deleted from the multiple.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}