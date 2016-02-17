---
layout: default
title: ORWDX RPCs
---


# ORWDX RPCs

## ORWDX AGAIN

Returns a 1 if the dialog should be kept for another order, otherwise 0.


Function | Return Value | Availability
--- | --- | --- | ---
AGAIN^ORWDX | SINGLE VALUE | -


## ORWDX CHANGE


Function | Return Value | Availability
--- | --- | --- | ---
CHANGE^ORWDX1 | SINGLE VALUE | PUBLIC


## ORWDX DGNM


Function | Return Value | Availability
--- | --- | --- | ---
DGNM^ORWDX | SINGLE VALUE | -


## ORWDX DGRP

Returns the display group pointer for an order dialog.


Function | Return Value | Availability
--- | --- | --- | ---
DGRP^ORWDX | SINGLE VALUE | -


## ORWDX DISMSG

Returns disabled message for an ordering dialog.


Function | Return Value | Availability
--- | --- | --- | ---
DISMSG^ORWDX | SINGLE VALUE | -


## ORWDX DLGDEF

Return format information for an order dialog in the format:   LST(n): PrmtID^PrmtIEN^FmtSeq^Fmt^Omit^Lead^Trail^NwLn^Wrap^Chld^IsChld


Function | Return Value | Availability
--- | --- | --- | ---
DLGDEF^ORWDX | ARRAY | -


## ORWDX DLGID

Returns the dialog IEN for an order.


Function | Return Value | Availability
--- | --- | --- | ---
DLGID^ORWDX | SINGLE VALUE | -


## ORWDX DLGQUIK

Return responses for a quick order (no longer used).


Function | Return Value | Availability
--- | --- | --- | ---
DLGQUIK^ORWDX | ARRAY | -


## ORWDX FORMID

Returns the base dialog FormID for an order.


Function | Return Value | Availability
--- | --- | --- | ---
FORMID^ORWDX | SINGLE VALUE | -


## ORWDX LOADRSP


Function | Return Value | Availability
--- | --- | --- | ---
LOADRSP^ORWDX | ARRAY | -


## ORWDX LOCK

RPC to attempt to lock patient for ordering (returns 1 if successful or 0if unsuccessful).


Function | Return Value | Availability
--- | --- | --- | ---
LOCK^ORWDX | SINGLE VALUE | -


## ORWDX LOCK ORDER

RPC to attempt to lock a specific order.


Function | Return Value | Availability
--- | --- | --- | ---
LOCKORD^ORWDX | SINGLE VALUE | -


## ORWDX MSG

Return message text for an orderable item.


Function | Return Value | Availability
--- | --- | --- | ---
MSG^ORWDX | ARRAY | -


## ORWDX ORDITM

Returns an array of orderable items in the format:   Y(n)=IEN^.01 Name^.01 Name  -or-  IEN^Synonym <.01 Name>^.01 Name


Function | Return Value | Availability
--- | --- | --- | ---
ORDITM^ORWDX | ARRAY | -


## ORWDX SAVE

Save the order by passing in the following information:        ORVP=DFN        ORNP=Provider        ORL=Location        DLG=Order Dialog,        ORDG=Display Group        ORIT=Quick Order Dialog,        ORIFN=null if new order        ORDIALOG=Response List


Function | Return Value | Availability
--- | --- | --- | ---
SAVE^ORWDX | ARRAY | -


## ORWDX SEND

RPC to sign a list of orders with input as follows:        DFN=Patient        ORNP=Provider        ORL=Location        ES=Encrypted ES code         ORWREC(n)=ORIFN;Action^Signature Sts^Release Sts^Nature of Order


Function | Return Value | Availability
--- | --- | --- | ---
SEND^ORWDX | ARRAY | -


## ORWDX SENDED


Function | Return Value | Availability
--- | --- | --- | ---
SENDED^ORWDX | ARRAY | -


## ORWDX SENDP

Same as ORWDX SEND, but allows print devices as parameter.


Function | Return Value | Availability
--- | --- | --- | ---
SENDP^ORWDX | ARRAY | -


## ORWDX UNLKOTH


Function | Return Value | Availability
--- | --- | --- | ---
UNLKOTH^ORWDX | SINGLE VALUE | -


## ORWDX UNLOCK

Unlocks the patient for ordering purposes.


Function | Return Value | Availability
--- | --- | --- | ---
UNLOCK^ORWDX | SINGLE VALUE | -


## ORWDX UNLOCK ORDER

RPC to unlock a specific order.


Function | Return Value | Availability
--- | --- | --- | ---
UNLKORD^ORWDX | SINGLE VALUE | -


## ORWDX WRLST

Return list of dialogs for writing orders in format:        Y(n)=DlgName^ListBox Text


Function | Return Value | Availability
--- | --- | --- | ---
WRLST^ORWDX | ARRAY | -


## ORWDX1 DCORIG


Function | Return Value | Availability
--- | --- | --- | ---
DCORIG^ORWDX1 | SINGLE VALUE | -


## ORWDX1 DCREN


Function | Return Value | Availability
--- | --- | --- | ---
DCREN^ORWDX1 | ARRAY | -


## ORWDX1 ORDMATCH

This RPC will accept a list of orders and each order status, if one of the order does not have a status it will return a false value.


Function | Return Value | Availability
--- | --- | --- | ---
ORDMATCH^ORWDX1 | SINGLE VALUE | -


## ORWDX1 PATWARD


Function | Return Value | Availability
--- | --- | --- | ---
PATWARD^ORWDX1 | SINGLE VALUE<br><br>Returns either a 0 patient is not on ward or a 1 patient is on a ward. | -


## ORWDX1 STCHANGE


Function | Return Value | Availability
--- | --- | --- | ---
STCHANGE^ORWDX1 | SINGLE VALUE | -


## ORWDX1 UNDCORIG


Function | Return Value | Availability
--- | --- | --- | ---
UNDCORIG^ORWDX1 | ARRAY | -


## ORWDX2 DCREASON

RPC to return a list of valid discontinuation reasons.


Function | Return Value | Availability
--- | --- | --- | ---
DCREASON^ORWDX2 | ARRAY | -


## ORWDXA ALERT

Set order to send an alert when the order is resulted.


Function | Return Value | Availability
--- | --- | --- | ---
ALERT^ORWDXA | SINGLE VALUE | -


## ORWDXA COMPLETE

Complete an order.


Function | Return Value | Availability
--- | --- | --- | ---
COMPLETE^ORWDXA | ARRAY | -


## ORWDXA DC

RPC to discontinue, cancel, or delete an existing order.


Function | Return Value | Availability
--- | --- | --- | ---
DC^ORWDXA | ARRAY | -


## ORWDXA DCREASON

RPC to return a list of valid discontinuation reasons.


Function | Return Value | Availability
--- | --- | --- | ---
DCREASON^ORWDXA | ARRAY | -


## ORWDXA DCREQIEN

Return the IEN for Requesting Physician Cancelled reason.


Function | Return Value | Availability
--- | --- | --- | ---
DCREQIEN^ORWDXA | SINGLE VALUE | -


## ORWDXA FLAG

Flag an existing order.


Function | Return Value | Availability
--- | --- | --- | ---
FLAG^ORWDXA | ARRAY | -


## ORWDXA FLAGTXT

Return text associated with a particular flagged order (reason for flag).


Function | Return Value | Availability
--- | --- | --- | ---
FLAGTXT^ORWDXA | ARRAY | -


## ORWDXA HOLD

RPC to place an existing order on hold.


Function | Return Value | Availability
--- | --- | --- | ---
HOLD^ORWDXA | ARRAY | -


## ORWDXA ISACTOI


Function | Return Value | Availability
--- | --- | --- | ---
ISACTOI^ORWDXA | SINGLE VALUE | -


## ORWDXA OFCPLX


Function | Return Value | Availability
--- | --- | --- | ---
OFCPLX^ORWDXA | SINGLE VALUE | -


## ORWDXA UNFLAG

Unflag an existing order.


Function | Return Value | Availability
--- | --- | --- | ---
UNFLAG^ORWDXA | ARRAY | -


## ORWDXA UNHOLD

RPC to remove a particular order from hold status.


Function | Return Value | Availability
--- | --- | --- | ---
UNHOLD^ORWDXA | ARRAY | -


## ORWDXA VALID

Returns an error message if the selected action is not valid for aparticular CPRS GUI order.


Function | Return Value | Availability
--- | --- | --- | ---
VALID^ORWDXA | SINGLE VALUE | -


## ORWDXA VERIFY

Verify an order via CPRS GUI.


Function | Return Value | Availability
--- | --- | --- | ---
VERIFY^ORWDXA | ARRAY | -


## ORWDXA WCGET

Return ward comments for an order.


Function | Return Value | Availability
--- | --- | --- | ---
WCGET^ORWDXA | ARRAY | -


## ORWDXA WCPUT

Set ward comments for an order.


Function | Return Value | Availability
--- | --- | --- | ---
WCPUT^ORWDXA | SINGLE VALUE | -


## ORWDXC ACCEPT

Return list of Order Checks on Accept Order.


Function | Return Value | Availability
--- | --- | --- | ---
ACCEPT^ORWDXC | ARRAY | -


## ORWDXC DELAY

Return list or order checks on accept delayed orders.


Function | Return Value | Availability
--- | --- | --- | ---
DELAY^ORWDXC | ARRAY | -


## ORWDXC DELORD

Delete order.


Function | Return Value | Availability
--- | --- | --- | ---
DELORD^ORWDXC | SINGLE VALUE | -


## ORWDXC DISPLAY

Return list of Order Checks for a FillerID (namespace).


Function | Return Value | Availability
--- | --- | --- | ---
DISPLAY^ORWDXC | ARRAY | -


## ORWDXC FILLID

Return the FillerID (namespace) for a dialog.


Function | Return Value | Availability
--- | --- | --- | ---
FILLID^ORWDXC | SINGLE VALUE | -


## ORWDXC ON

Returns E if order checking enabled, otherwise D.


Function | Return Value | Availability
--- | --- | --- | ---
ON^ORWDXC | SINGLE VALUE | -


## ORWDXC SAVECHK

Save order checks for session.


Function | Return Value | Availability
--- | --- | --- | ---
SAVECHK^ORWDXC | SINGLE VALUE | -


## ORWDXC SESSION

Return list of order checks on release of order.


Function | Return Value | Availability
--- | --- | --- | ---
SESSION^ORWDXC | ARRAY | -


## ORWDXM AUTOACK

Place a quick order in CPRS GUI without the verify step.


Function | Return Value | Availability
--- | --- | --- | ---
AUTOACK^ORWDXM | ARRAY | -


## ORWDXM DLGNAME

Return name(s) of dialog & base dialog given IEN in format:        VAL=InternalName^DisplayName^BaseDialogIEN^BaseDialogName


Function | Return Value | Availability
--- | --- | --- | ---
DLGNAME^ORWDXM | SINGLE VALUE | -


## ORWDXM FORMID

Return the FormID for a dialog entry.


Function | Return Value | Availability
--- | --- | --- | ---
FORMID^ORWDXM | SINGLE VALUE | -


## ORWDXM LOADSET

Return the contents of an order set in the following format:   LST(0): SetDisplayText^Key Variables   LST(n): DlgIEN^DlgType^DisplayText


Function | Return Value | Availability
--- | --- | --- | ---
LOADSET^ORWDXM | ARRAY | -


## ORWDXM MENU

Returns menu contents for an order dialog in the following format:    LST(0)=name^# cols^path switch^^^ Key Variables (pieces 6-20)    LST(n)=col^row^type^ien^formid^autoaccept^display text^mnemonic           ^displayonly


Function | Return Value | Availability
--- | --- | --- | ---
MENU^ORWDXM | ARRAY | -


## ORWDXM MSTYLE

Return the menu style for the system.


Function | Return Value | Availability
--- | --- | --- | ---
MSTYLE^ORWDXM | SINGLE VALUE | -


## ORWDXM PROMPTS

Return prompting information for a generic dialog in the format:    LST(n)=ID^REQ^HID^PROMPT^TYPE^DOMAIN^DEFAULT^IDFLT^HELP


Function | Return Value | Availability
--- | --- | --- | ---
PROMPTS^ORWDXM | ARRAY | -


## ORWDXM1 BLDQRSP

Build responses for an order Input:      1   2    3    4   5   6    7    8        11-20FLDS=DFN^LOC^ORNP^INPT^SEX^AGE^EVENT^SC%^^^Key Variables...ORIT=+ORIT: ptr to 101.41, $E(ORIT)=C: copy $E(ORIT)=X: change Output:LST=QuickLevel^ResponseID(ORIT;$H)^Dialog^Type^FormID^DGrpLST(n)=verify text or rejection text


Function | Return Value | Availability
--- | --- | --- | ---
BLDQRSP^ORWDXM1 | ARRAY | -


## ORWDXM1 SVRPC


Function | Return Value | Availability
--- | --- | --- | ---
SVRPC^ORWDXM1 | SINGLE VALUE | -


## ORWDXM2 CLRRCL

Clear ORECALL.  Used by CPRS GUI to clean up ^TMP("ORECALL",$J) and^TMP("ORWDXMQ",$J).


Function | Return Value | Availability
--- | --- | --- | ---
CLRRCL^ORWDXM2 | SINGLE VALUE | -


## ORWDXM3 ISUDQO


Function | Return Value | Availability
--- | --- | --- | ---
ISUDQO^ORWDXM3 | SINGLE VALUE | -


## ORWDXQ DLGNAME

Return display name for a dialog.


Function | Return Value | Availability
--- | --- | --- | ---
DLGNAME^ORWDXQ | SINGLE VALUE | -


## ORWDXQ DLGSAVE

Return IEN of new or existing quick order.


Function | Return Value | Availability
--- | --- | --- | ---
DLGSAVE^ORWDXQ | SINGLE VALUE | -


## ORWDXQ GETQLST

Return quick list for a display group.


Function | Return Value | Availability
--- | --- | --- | ---
GETQLST^ORWDXQ | ARRAY | -


## ORWDXQ GETQNAM

Return current quick order name.


Function | Return Value | Availability
--- | --- | --- | ---
GETQNAM^ORWDXQ | SINGLE VALUE | -


## ORWDXQ PUTQLST

Save quick order list.


Function | Return Value | Availability
--- | --- | --- | ---
PUTQLST^ORWDXQ | SINGLE VALUE | -


## ORWDXQ PUTQNAM

Save display name for quick order dialog.


Function | Return Value | Availability
--- | --- | --- | ---
PUTQNAM^ORWDXQ | SINGLE VALUE | -


## ORWDXR CANRN


Function | Return Value | Availability
--- | --- | --- | ---
CANRN^ORWDXR | SINGLE VALUE | -


## ORWDXR GETPKG


Function | Return Value | Availability
--- | --- | --- | ---
GETPKG^ORWDXR | SINGLE VALUE | -


## ORWDXR GTORITM


Function | Return Value | Availability
--- | --- | --- | ---
GTORITM^ORWDXR | SINGLE VALUE | -


## ORWDXR ISCPLX


Function | Return Value | Availability
--- | --- | --- | ---
ISCPLX^ORWDXR | SINGLE VALUE | -


## ORWDXR ISNOW


Function | Return Value | Availability
--- | --- | --- | ---
ISNOW^ORWDXR | SINGLE VALUE | -


## ORWDXR ISREL

Return 1 if an order has been released, otherwise return 0.


Function | Return Value | Availability
--- | --- | --- | ---
ISREL^ORWDXR | SINGLE VALUE | -


## ORWDXR ORCPLX


Function | Return Value | Availability
--- | --- | --- | ---
ORCPLX^ORWDXR | ARRAY | -


## ORWDXR RENEW

Renew an existing order.


Function | Return Value | Availability
--- | --- | --- | ---
RENEW^ORWDXR | ARRAY | -


## ORWDXR RNWFLDS

Return fields for renew action in format:    LST(0)=RenewType^Start^Stop^Refills^Pickup  LST(n)=Comments


Function | Return Value | Availability
--- | --- | --- | ---
RNWFLDS^ORWDXR | ARRAY | -


## ORWDXR01 CANCHG


Function | Return Value | Availability
--- | --- | --- | ---
CANCHG^ORWDXR01 | SINGLE VALUE | -


## ORWDXR01 ISSPLY


Function | Return Value | Availability
--- | --- | --- | ---
ISSPLY^ORWDXR01 | SINGLE VALUE | -


## ORWDXR01 OXDATA


Function | Return Value | Availability
--- | --- | --- | ---
OXDATA^ORWDXR01 | SINGLE VALUE | -


## ORWDXR01 SAVCHG


Function | Return Value | Availability
--- | --- | --- | ---
SAVCHG^ORWDXR01 | ARRAY | -


## ORWDXVB COMPORD

Get sequence order of Blood Components for selection.


Function | Return Value | Availability
--- | --- | --- | ---
COMPORD^ORWDXVB | ARRAY | -


## ORWDXVB GETALL

Return patient's Blood Bank information.


Function | Return Value | Availability
--- | --- | --- | ---
GETALL^ORWDXVB | GLOBAL ARRAY | -


## ORWDXVB NURSADMN

This procedure checks the parameter OR VBECS SUPPRESS NURS ADMIN to seeif the Nursing Administration Order prompt/pop-up should be supressedafter a VBECS Blood Bank order has been created.


Function | Return Value | Availability
--- | --- | --- | ---
NURSADMN^ORWDXVB | SINGLE VALUE | -


## ORWDXVB RAW

Return raw Lab Test Results associated with Blood Bank orderrequest.


Function | Return Value | Availability
--- | --- | --- | ---
RAW^ORWDXVB | GLOBAL ARRAY | -


## ORWDXVB RESULTS

Return patient's Lab Test Results associated with Blood Bank orderrequest.


Function | Return Value | Availability
--- | --- | --- | ---
RESULTS^ORWDXVB | GLOBAL ARRAY | -


## ORWDXVB STATALOW

Check to see if user is allowed to order STAT orders through VBECS.Checks users with parameter: OR VBECS STAT USER


Function | Return Value | Availability
--- | --- | --- | ---
STATALOW^ORWDXVB | SINGLE VALUE | -


## ORWDXVB SUBCHK

Check to see if selected test is a Blood Component or a Diagnostic Test.


Function | Return Value | Availability
--- | --- | --- | ---
SUBCHK^ORWDXVB | SINGLE VALUE | -


## ORWDXVB VBTNS


Function | Return Value | Availability
--- | --- | --- | ---
VBTNS^ORWDXVB | SINGLE VALUE | -


## ORWDXVB3 COLLTIM

This RPC checks the value of the parameter OR VBECS REMOVE COLL TIMEto determine if a default collection time should be presented on theVBECS order dialog.


Function | Return Value | Availability
--- | --- | --- | ---
COLLTIM^ORWDXVB3 | SINGLE VALUE | -


## ORWDXVB3 DIAGORD

Get sequence order of Diagnostic Tests for selection.


Function | Return Value | Availability
--- | --- | --- | ---
DIAGORD^ORWDXVB3 | ARRAY | -


## ORWDXVB3 SWPANEL

This RPC checks the value of the parameter OR VBECS DIAGNOSTIC PANEL 1STto determine the location of the Diagnostic and Component panels on theVBECS order dialog.


Function | Return Value | Availability
--- | --- | --- | ---
SWPANEL^ORWDXVB3 | SINGLE VALUE | -


