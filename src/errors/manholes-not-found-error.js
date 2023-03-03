class ManholesNotFoundError extends Error {
  constructor() {
    super(
      "Manhole에 대한 정보를 찾을 수 없습니다.\n아마 서비스 내부 오류일 가능성이 있으니 제보해주시기 바랍니다."
    );
    alert(
      "Manhole에 대한 정보를 찾을 수 없습니다.\n아마 서비스 내부 오류일 가능성이 있으니 제보해주시기 바랍니다."
    );
  }
}
export default ManholesNotFoundError;
