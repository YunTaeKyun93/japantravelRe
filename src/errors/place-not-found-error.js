class PlaceNotFoundError extends Error {
  constructor({ placeId }) {
    super(
      "주어진 Place id에 대한 Place를 찾을 수 없습니다.\n아마 서비스 내부 오류일 가능성이 있으니 제보해주시기 바랍니다."
    );
    this.placeId = placeId;
    alert(
      "주어진 Place id에 대한 Place를 찾을 수 없습니다.\n아마 서비스 내부 오류일 가능성이 있으니 제보해주시기 바랍니다."
    );
  }
}
export default PlaceNotFoundError;
