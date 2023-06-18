// tH[JXAEgEG^[L[_E|XgobNCxgpsE
var lastBlurOnEnterTime;

// tH[JXAEgEG^[L[_E|XgobNCxgps
function InitializeLastBlurOnEnterTime()
{
    lastBlurOnEnterTime = "ok";
}
// tH[JXAEgEG^[L[_E|XgobNCxgps
function ResetLastBlurOnEnterTime()
{
    lastBlurOnEnterTime = null;
}
// tH[JXAEgEG^[L[_ECxgs\
function CheckBlurOnEnterEnabled()
{
    return (lastBlurOnEnterTime == "ok");
}